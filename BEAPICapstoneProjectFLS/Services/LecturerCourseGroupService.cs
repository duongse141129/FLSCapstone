using BEAPICapstoneProjectFLS.Entities;
using BEAPICapstoneProjectFLS.IRepositories;
using BEAPICapstoneProjectFLS.IServices;
using BEAPICapstoneProjectFLS.Requests.DepartmentGroupRequest;
using BEAPICapstoneProjectFLS.ViewModel;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using PagedList;
using Reso.Core.Utilities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BEAPICapstoneProjectFLS.Enum;
using BEAPICapstoneProjectFLS.Requests;
using BEAPICapstoneProjectFLS.RandomKey;
using BEAPICapstoneProjectFLS.Requests.LecturerCourseGroupRequest;

namespace BEAPICapstoneProjectFLS.Services
{
    public class LecturerCourseGroupService : ILecturerCourseGroupService
    {
        private readonly IGenericRepository<LecturerCourseGroup> _res;
        private readonly IMapper _mapper;

        public LecturerCourseGroupService(IGenericRepository<LecturerCourseGroup> repository, IMapper mapper)
        {
            _res = repository;
            _mapper = mapper;
        }

        public async Task<LecturerCourseGroupViewModel> CreateLecturerCourseGroup(CreateLecturerCourseGroupRequest request)
        {
            try
            {
                var lcr = _mapper.Map<LecturerCourseGroup>(request);
                lcr.Id = RandomPKKey.NewRamDomPKKey();
                await _res.InsertAsync(lcr);
                await _res.SaveAsync();

                var lcrVM = await GetLecturerCourseGroupById(lcr.Id);
                return lcrVM;
            }
            catch
            {
                return null;
            }

        }

        public async Task<bool> DeleteLecturerCourseGroup(string id)
        {
            var lecturerCourseGroup = (await _res.FindByAsync(x => x.Id == id && x.Status == (int)LecturerCourseGroupStatus.Active)).FirstOrDefault();
            if (lecturerCourseGroup == null)
            {
                return false;
            }
            lecturerCourseGroup.Status = 0;
            await _res.UpdateAsync(lecturerCourseGroup);
            await _res.SaveAsync();
            return true;
        }

        public IPagedList<LecturerCourseGroupViewModel> GetAllLecturerCourseGroup(LecturerCourseGroupViewModel flitter, int pageIndex, int pageSize, LecturerCourseGroupSortBy sortBy, OrderBy order)
        {
            var listLecturerCourseGroup = _res.FindBy(x => x.Status == (int)FLSStatus.Active);

            var listLecturerCourseGroupViewModel = (listLecturerCourseGroup.ProjectTo<LecturerCourseGroupViewModel>
                (_mapper.ConfigurationProvider)).DynamicFilter(flitter);
            switch (sortBy.ToString())
            {
                case "GroupName":
                    if (order.ToString() == "Asc")
                    {
                        listLecturerCourseGroupViewModel = (IQueryable<LecturerCourseGroupViewModel>)listLecturerCourseGroupViewModel.OrderBy(x => x.GroupName);
                    }
                    else
                    {
                        listLecturerCourseGroupViewModel = (IQueryable<LecturerCourseGroupViewModel>)listLecturerCourseGroupViewModel.OrderByDescending(x => x.GroupName);
                    }
                    break;
                case "Id":
                    if (order.ToString() == "Asc")
                    {
                        listLecturerCourseGroupViewModel = (IQueryable<LecturerCourseGroupViewModel>)listLecturerCourseGroupViewModel.OrderBy(x => x.Id);
                    }
                    else
                    {
                        listLecturerCourseGroupViewModel = (IQueryable<LecturerCourseGroupViewModel>)listLecturerCourseGroupViewModel.OrderByDescending(x => x.Id);
                    }
                    break;
            }
            return PagedListExtensions.ToPagedList<LecturerCourseGroupViewModel>(listLecturerCourseGroupViewModel, pageIndex, pageSize);
        }


        public async Task<LecturerCourseGroupViewModel> GetLecturerCourseGroupById(string id)
        {

            var lcr = await _res.GetAllByIQueryable()
                .Where(x => x.Id == id && x.Status == (int)LecturerCourseGroupStatus.Active)
                .Include(x => x.Lecturer)
                .Include(x => x.Semester)
                .FirstOrDefaultAsync();
            if (lcr == null)
                return null;
            var lecturerCourseGroupVM = _mapper.Map<LecturerCourseGroupViewModel>(lcr);
            return lecturerCourseGroupVM;
        }

        public async Task<LecturerCourseGroupViewModel> UpdateLecturerCourseGroup(string id, UpdateLecturerCourseGroupRequest request)
        {
            try
            {
                var listLecturerCourseGroup = await _res.FindByAsync(x => x.Id == id && x.Status == (int)LecturerCourseGroupStatus.Active);
                if (listLecturerCourseGroup == null)
                {
                    return null;
                }
                var lecturerCourseGroup = listLecturerCourseGroup.FirstOrDefault();
                if (lecturerCourseGroup == null)
                {
                    return null;
                }
                lecturerCourseGroup = _mapper.Map(request, lecturerCourseGroup);
                await _res.UpdateAsync(lecturerCourseGroup);
                await _res.SaveAsync();

                var lcrVM = await GetLecturerCourseGroupById(lecturerCourseGroup.Id);
                return lcrVM;
            }
            catch
            {
                return null;
            }
        }
    }
}
