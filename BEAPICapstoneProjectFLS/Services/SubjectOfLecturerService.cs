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
using BEAPICapstoneProjectFLS.Requests.SubjectOfLecturerRequest;

namespace BEAPICapstoneProjectFLS.Services
{
    public class SubjectOfLecturerService : ISubjectOfLecturerService
    {
        private readonly IGenericRepository<SubjectOfLecturer> _res;
        private readonly IMapper _mapper;

        public SubjectOfLecturerService(IGenericRepository<SubjectOfLecturer> repository, IMapper mapper)
        {
            _res = repository;
            _mapper = mapper;
        }

        public async Task<SubjectOfLecturerViewModel> CreateSubjectOfLecturer(CreateSubjectOfLecturerRequest request)
        {
            try
            {
                var sol = _mapper.Map<SubjectOfLecturer>(request);
                sol.Id = RandomPKKey.NewRamDomPKKey();
                await _res.InsertAsync(sol);
                await _res.SaveAsync();

                var solVM = await GetSubjectOfLecturerById(sol.Id);
                return solVM;
            }
            catch
            {
                return null;
            }

        }

        public async Task<bool> DeleteSubjectOfLecturer(string id)
        {
            var subjectOfLecturer = (await _res.FindByAsync(x => x.Id == id && x.Status == (int)SubjectOfLecturerStatus.Active)).FirstOrDefault();
            if (subjectOfLecturer == null)
            {
                return false;
            }
            subjectOfLecturer.Status = 0;
            await _res.UpdateAsync(subjectOfLecturer);
            await _res.SaveAsync();
            return true;
        }

        public IPagedList<SubjectOfLecturerViewModel> GetAllSubjectOfLecturer(SubjectOfLecturerViewModel flitter, int pageIndex, int pageSize, SubjectOfLecturerSortBy sortBy, OrderBy order)
        {
            var listSubjectOfLecturer = _res.FindBy(x => x.Status == (int)FLSStatus.Active);

            var listSubjectOfLecturerViewModel = (listSubjectOfLecturer.ProjectTo<SubjectOfLecturerViewModel>
                (_mapper.ConfigurationProvider)).DynamicFilter(flitter);
            switch (sortBy.ToString())
            {
                case "LecturerId":
                    if (order.ToString() == "Asc")
                    {
                        listSubjectOfLecturerViewModel = (IQueryable<SubjectOfLecturerViewModel>)listSubjectOfLecturerViewModel.OrderBy(x => x.LecturerId);
                    }
                    else
                    {
                        listSubjectOfLecturerViewModel = (IQueryable<SubjectOfLecturerViewModel>)listSubjectOfLecturerViewModel.OrderByDescending(x => x.LecturerId);
                    }
                    break;
                case "Id":
                    if (order.ToString() == "Asc")
                    {
                        listSubjectOfLecturerViewModel = (IQueryable<SubjectOfLecturerViewModel>)listSubjectOfLecturerViewModel.OrderBy(x => x.Id);
                    }
                    else
                    {
                        listSubjectOfLecturerViewModel = (IQueryable<SubjectOfLecturerViewModel>)listSubjectOfLecturerViewModel.OrderByDescending(x => x.Id);
                    }
                    break;
            }
            return PagedListExtensions.ToPagedList<SubjectOfLecturerViewModel>(listSubjectOfLecturerViewModel, pageIndex, pageSize);
        }


        public async Task<SubjectOfLecturerViewModel> GetSubjectOfLecturerById(string id)
        {

            var listSOL = _res.FindBy(x => x.Status == (int)FLSStatus.Active);

            var listSOLViewModel = (listSOL.ProjectTo<SubjectOfLecturerViewModel>
                (_mapper.ConfigurationProvider)).DynamicFilter(new SubjectOfLecturerViewModel { Id = id });

            var sol = await listSOLViewModel.FirstOrDefaultAsync();
            if (sol == null)
                return null;
            return sol;

            /*var sol = await _res.GetAllByIQueryable()
                .Where(x => x.Id == id && x.Status == (int)SubjectOfLecturerStatus.Active)
                .Include(x => x.Lecturer)
                .Include(x => x.Semester)
                .Include(x => x.Subject)
                .Include(x => x.DepartmentManager)
                .FirstOrDefaultAsync();
            if (sol == null)
                return null;
            var subjectOfLecturerVM = _mapper.Map<SubjectOfLecturerViewModel>(sol);
            return subjectOfLecturerVM;*/
        }

        public async Task<SubjectOfLecturerViewModel> UpdateSubjectOfLecturer(string id, UpdateSubjectOfLecturerRequest request)
        {
            try
            {
                var listSubjectOfLecturer = await _res.FindByAsync(x => x.Id == id && x.Status == (int)SubjectOfLecturerStatus.Active);
                if (listSubjectOfLecturer == null)
                {
                    return null;
                }
                var subjectOfLecturer = listSubjectOfLecturer.FirstOrDefault();
                if (subjectOfLecturer == null)
                {
                    return null;
                }
                subjectOfLecturer = _mapper.Map(request, subjectOfLecturer);
                await _res.UpdateAsync(subjectOfLecturer);
                await _res.SaveAsync();

                var solVM = await GetSubjectOfLecturerById(subjectOfLecturer.Id);
                return solVM;
            }
            catch
            {
                return null;
            }
        }
    }
}
