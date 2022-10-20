using AutoMapper;
using AutoMapper.QueryableExtensions;
using BEAPICapstoneProjectFLS.Entities;
using BEAPICapstoneProjectFLS.Enum;
using BEAPICapstoneProjectFLS.IRepositories;
using BEAPICapstoneProjectFLS.IServices;
using BEAPICapstoneProjectFLS.RandomKey;
using BEAPICapstoneProjectFLS.Requests;
using BEAPICapstoneProjectFLS.Requests.LecturerRequest;
using BEAPICapstoneProjectFLS.ViewModel;
using Microsoft.EntityFrameworkCore;
using PagedList;
using Reso.Core.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BEAPICapstoneProjectFLS.Services
{
    public class LecturerService : ILecturerService
    {
        private readonly IGenericRepository<Lecturer> _res;
        private readonly IMapper _mapper;

        public LecturerService(IGenericRepository<Lecturer> repository, IMapper mapper)
        {
            _res = repository;
            _mapper = mapper;
        }
        public async Task<LecturerViewModel> CreateLecturer(CreateLecturerRequest request)
        {
            try
            {
                var lc = _mapper.Map<Lecturer>(request);
                lc.Id = RandomPKKey.NewRamDomPKKey();
                await _res.InsertAsync(lc);
                await _res.SaveAsync();

                var lecturer = await GetLecturerById(lc.Id);
                return _mapper.Map<LecturerViewModel>(lecturer);
            }
            catch
            {
                return null;
            }
        }

        public async Task<bool> DeleteLecturer(string id)
        {
            var lecturer = (await _res.FindByAsync(x => x.Id == id && x.Status == (int)LecturerStatus.Active)).FirstOrDefault();
            if (lecturer == null)
            {
                return false;
            }
            lecturer.Status = 0;
            await _res.UpdateAsync(lecturer);
            await _res.SaveAsync();
            return true;
        }

        public IPagedList<LecturerViewModel> GetAllLecturer(LecturerViewModel flitter, int pageIndex, int pageSize, LecturerSortBy sortBy, OrderBy order)
        {
            var listLecturer = _res.FindBy(x => x.Status == (int)FLSStatus.Active);
           
            var listLecturerViewModel = (listLecturer.ProjectTo<LecturerViewModel>
               (_mapper.ConfigurationProvider)).DynamicFilter(flitter);
            
            
            //var listLecturerViewModel = (listLecturer.ProjectTo<LecturerViewModel>
            //    (_mapper.ConfigurationProvider)).DynamicFilter(flitter);
            switch (sortBy.ToString())
            {
                case "Name":
                    if (order.ToString() == "Asc")
                    {
                        listLecturerViewModel = (IQueryable<LecturerViewModel>)listLecturerViewModel.OrderBy(x => x.Name);
                    }
                    else
                    {
                        listLecturerViewModel = (IQueryable<LecturerViewModel>)listLecturerViewModel.OrderByDescending(x => x.Name);
                    }
                    break;
                case "Id":
                    if (order.ToString() == "Asc")
                    {
                        listLecturerViewModel = (IQueryable<LecturerViewModel>)listLecturerViewModel.OrderBy(x => x.Id);
                    }
                    else
                    {
                        listLecturerViewModel = (IQueryable<LecturerViewModel>)listLecturerViewModel.OrderByDescending(x => x.Id);
                    }
                    break;
                case "Email":
                    if (order.ToString() == "Asc")
                    {
                        listLecturerViewModel = (IQueryable<LecturerViewModel>)listLecturerViewModel.OrderBy(x => x.Email);
                    }
                    else
                    {
                        listLecturerViewModel = (IQueryable<LecturerViewModel>)listLecturerViewModel.OrderByDescending(x => x.Email);
                    }
                    break;
            }
            return PagedListExtensions.ToPagedList<LecturerViewModel>(listLecturerViewModel, pageIndex, pageSize);

        }

        public IPagedList<LecturerViewModel> GetAllLecturerPagein(int pageIndex,int pageSize)
        {
            var listLecturer = _res.FindBy(x => x.Status == (int)FLSStatus.Active);
            var listLecturerViewModel = _mapper.Map<IEnumerable<LecturerViewModel>>(listLecturer);
            return PagedListExtensions.ToPagedList<LecturerViewModel>(listLecturerViewModel, pageIndex, pageSize);
        }

        public async Task<LecturerViewModel> GetLecturerById(string id)
        {
            var de = await _res.GetAllByIQueryable()
                .Where(x => x.Id == id && x.Status == (int)LecturerStatus.Active)
                .Include(x => x.Department)
                .FirstOrDefaultAsync();
            if (de == null)
                return null;
            var lecturerVM = _mapper.Map<LecturerViewModel>(de);
            return lecturerVM;
        }

        public async Task<LecturerViewModel> GetLecturerByEmail(string email)
        {
            var e = email.ToString();
            var de = await _res.GetAllByIQueryable()
                .Where(x => x.Email == email && x.Status == (int)LecturerStatus.Active)
                .Include(x => x.Department)
                .FirstOrDefaultAsync();
            if (de == null)
                return null;
            var lecturerVM = _mapper.Map<LecturerViewModel>(de);
            var test = _mapper.Map<Lecturer>(lecturerVM);

            return lecturerVM;
        }

        public async Task<IEnumerable<LecturerViewModel>> GetAllLecturerByDepartmentID(string departmentID)
        {
            var lectueres = await _res.GetAllByIQueryable().Where(x => x.Status == (int)LecturerStatus.Active)
                .Include(b => b.Department)
                .Where(b => b.DepartmentId == departmentID).ToListAsync();
            return _mapper.Map<IEnumerable<LecturerViewModel>>(lectueres);
        }

        public async Task<LecturerViewModel> UpdateLecturer(string id, UpdateLecturerRequest request)
        {
            try
            {
                var listLecturer = await _res.FindByAsync(x => x.Id == id && x.Status == (int)LecturerStatus.Active);
                if (listLecturer == null)
                {
                    return null;
                }
                var lecturer = listLecturer.FirstOrDefault();
                if (lecturer == null)
                {
                    return null;
                }
                lecturer = _mapper.Map(request, lecturer);
                await _res.UpdateAsync(lecturer);
                await _res.SaveAsync();

                var d = await GetLecturerById(lecturer.Id);
                return _mapper.Map<LecturerViewModel>(d);
            }
            catch
            {
                return null;
            }
        }
    }
}
