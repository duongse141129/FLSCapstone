using AutoMapper;
using AutoMapper.QueryableExtensions;
using BEAPICapstoneProjectFLS.Entities;
using BEAPICapstoneProjectFLS.Enum;
using BEAPICapstoneProjectFLS.IRepositories;
using BEAPICapstoneProjectFLS.IServices;
using BEAPICapstoneProjectFLS.RandomKey;
using BEAPICapstoneProjectFLS.Requests;
using BEAPICapstoneProjectFLS.Requests.DepartmentManagerRequest;
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
    public class DepartmentManagerService : IDepartmentManagerService
    {
        private readonly IGenericRepository<DepartmentManager> _res;
        private readonly IMapper _mapper;

        public DepartmentManagerService(IGenericRepository<DepartmentManager> repository, IMapper mapper)
        {
            _res = repository;
            _mapper = mapper;
        }
        public async Task<DepartmentManagerViewModel> CreateDepartmentManager(CreateDepartmentManagerRequest request)
        {
            try
            {
                var dmr = _mapper.Map<DepartmentManager>(request);
                dmr.Id = RandomPKKey.NewRamDomPKKey();
                await _res.InsertAsync(dmr);
                await _res.SaveAsync();

                var DepartmentManagerVM = await GetDepartmentManagerById(dmr.Id);
                return DepartmentManagerVM;
            }
            catch
            {
                return null;
            }
        }

        public async Task<bool> DeleteDepartmentManager(string id)
        {
            var departmentManager = (await _res.FindByAsync(x => x.Id == id && x.Status == (int)DepartmentManagerStatus.Active)).FirstOrDefault();
            if (departmentManager == null)
            {
                return false;
            }
            departmentManager.Status = 0;
            await _res.UpdateAsync(departmentManager);
            await _res.SaveAsync();
            return true;
        }

        public IPagedList<DepartmentManagerViewModel> GetAllDepartmentManager(DepartmentManagerViewModel flitter, int pageIndex, int pageSize, DepartmentManagerSortBy sortBy, OrderBy order)
        {
            var listDepartmentManager = _res.FindBy(x => x.Status == (int)FLSStatus.Active);

            var listDepartmentManagerViewModel = (listDepartmentManager.ProjectTo<DepartmentManagerViewModel>
               (_mapper.ConfigurationProvider)).DynamicFilter(flitter);
            switch (sortBy.ToString())
            {
                case "Name":
                    if (order.ToString() == "Asc")
                    {
                        listDepartmentManagerViewModel = (IQueryable<DepartmentManagerViewModel>)listDepartmentManagerViewModel.OrderBy(x => x.Name);
                    }
                    else
                    {
                        listDepartmentManagerViewModel = (IQueryable<DepartmentManagerViewModel>)listDepartmentManagerViewModel.OrderByDescending(x => x.Name);
                    }
                    break;
                case "Id":
                    if (order.ToString() == "Asc")
                    {
                        listDepartmentManagerViewModel = (IQueryable<DepartmentManagerViewModel>)listDepartmentManagerViewModel.OrderBy(x => x.Id);
                    }
                    else
                    {
                        listDepartmentManagerViewModel = (IQueryable<DepartmentManagerViewModel>)listDepartmentManagerViewModel.OrderByDescending(x => x.Id);
                    }
                    break;
                case "Email":
                    if (order.ToString() == "Asc")
                    {
                        listDepartmentManagerViewModel = (IQueryable<DepartmentManagerViewModel>)listDepartmentManagerViewModel.OrderBy(x => x.Email);
                    }
                    else
                    {
                        listDepartmentManagerViewModel = (IQueryable<DepartmentManagerViewModel>)listDepartmentManagerViewModel.OrderByDescending(x => x.Email);
                    }
                    break;
            }
            return PagedListExtensions.ToPagedList<DepartmentManagerViewModel>(listDepartmentManagerViewModel, pageIndex, pageSize);
        }

        public async Task<IEnumerable<DepartmentManagerViewModel>> GetAllDepartmentManagerByDepartmentID(string departmentID)
        {
            var departmentManagers = await _res.GetAllByIQueryable().Where(x => x.Status == (int)DepartmentManagerStatus.Active)
                .Include(b => b.Department)
                .Where(b => b.DepartmentId == departmentID).ToListAsync();
            return _mapper.Map<IEnumerable<DepartmentManagerViewModel>>(departmentManagers);
        }

        public IPagedList<DepartmentManagerViewModel> GetAllDepartmentManagerPagein(int pageIndex, int pageSize)
        {
            var listDepartmentManager = _res.FindBy(x => x.Status == (int)FLSStatus.Active);
            var listDepartmentManagerViewModel = _mapper.Map<IEnumerable<DepartmentManagerViewModel>>(listDepartmentManager);
            return PagedListExtensions.ToPagedList<DepartmentManagerViewModel>(listDepartmentManagerViewModel, pageIndex, pageSize);
        }

        public async Task<DepartmentManagerViewModel> GetDepartmentManagerByEmail(string email)
        {
            var demer = await _res.GetAllByIQueryable()
                .Where(x => x.Email == email && x.Status == (int)DepartmentManagerStatus.Active)
                .Include(x => x.Department)
                .FirstOrDefaultAsync();
            if (demer == null)
                return null;
            var departmentManagerVM = _mapper.Map<DepartmentManagerViewModel>(demer);
            var test = _mapper.Map<DepartmentManager>(departmentManagerVM);

            return departmentManagerVM;
        }

        public async Task<DepartmentManagerViewModel> GetDepartmentManagerById(string id)
        {
            var de = await _res.GetAllByIQueryable()
                .Where(x => x.Id == id && x.Status == (int)DepartmentManagerStatus.Active)
                .Include(x => x.Department)
                .FirstOrDefaultAsync();
            if (de == null)
                return null;
            var departmentManagerVM = _mapper.Map<DepartmentManagerViewModel>(de);
            return departmentManagerVM;
        }

        public async Task<DepartmentManagerViewModel> UpdateDepartmentManager(string id, UpdateDepartmentManagerRequest request)
        {
            try
            {
                var listDepartmentManager = await _res.FindByAsync(x => x.Id == id && x.Status == (int)DepartmentManagerStatus.Active);
                if (listDepartmentManager == null)
                {
                    return null;
                }
                var DepartmentManager = listDepartmentManager.FirstOrDefault();
                if (DepartmentManager == null)
                {
                    return null;
                }
                DepartmentManager = _mapper.Map(request, DepartmentManager);
                await _res.UpdateAsync(DepartmentManager);
                await _res.SaveAsync();

                var departmentManagerVM = await GetDepartmentManagerById(DepartmentManager.Id);
                return departmentManagerVM;
            }
            catch
            {
                return null;
            }
        }
    }
}
