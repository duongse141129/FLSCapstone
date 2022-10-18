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
using BEAPICapstoneProjectFLS.IServices;
using BEAPICapstoneProjectFLS.Requests.AdminRequest;

namespace BEAPICapstoneProjectFLS.Services
{
    public class AdminService : IAdminService
    {
        private readonly IGenericRepository<Admin> _res;
        private readonly IMapper _mapper;

        public AdminService(IGenericRepository<Admin> repository, IMapper mapper)
        {
            _res = repository;
            _mapper = mapper;
        }
        public async Task<AdminViewModel> CreateAdmin(CreateAdminRequest request)
        {
            try
            {
                var ad = _mapper.Map<Admin>(request);
                ad.Id = RandomPKKey.NewRamDomPKKey();
                await _res.InsertAsync(ad);
                await _res.SaveAsync();

                var Admin = await GetAdminById(ad.Id);
                return _mapper.Map<AdminViewModel>(Admin);
            }
            catch
            {
                return null;
            }
        }

        public async Task<bool> DeleteAdmin(string id)
        {
            var admin = (await _res.FindByAsync(x => x.Id == id && x.Status == (int)AdminStatus.Active)).FirstOrDefault();
            if (admin == null)
            {
                return false;
            }
            admin.Status = 0;
            await _res.UpdateAsync(admin);
            await _res.SaveAsync();
            return true;
        }

        public async Task<AdminViewModel> GetAdminByEmail(string email)
        {
            var ad = await _res.GetAllByIQueryable()
                .Where(x => x.Email == email && x.Status == (int)AdminStatus.Active)
                .FirstOrDefaultAsync();
            if (ad == null)
                return null;
            var AdminVM = _mapper.Map<AdminViewModel>(ad);
            var test = _mapper.Map<Admin>(AdminVM);

            return AdminVM;
        }

        public async Task<AdminViewModel> GetAdminById(string id)
        {
            var ad = await _res.GetAllByIQueryable()
                .Where(x => x.Id == id && x.Status == (int)AdminStatus.Active)
                .FirstOrDefaultAsync();
            if (ad == null)
                return null;
            var AdminVM = _mapper.Map<AdminViewModel>(ad);
            return AdminVM;
        }

        public IPagedList<AdminViewModel> GetAllAdmin(AdminViewModel flitter, int pageIndex, int pageSize, AdminSortBy sortBy, OrderBy order)
        {
            var listAdmin = _res.FindBy(x => x.Status == (int)FLSStatus.Active);

            var listAdminViewModel = (listAdmin.ProjectTo<AdminViewModel>
               (_mapper.ConfigurationProvider)).DynamicFilter(flitter);

            switch (sortBy.ToString())
            {
                case "Name":
                    if (order.ToString() == "Asc")
                    {
                        listAdminViewModel = (IQueryable<AdminViewModel>)listAdminViewModel.OrderBy(x => x.Name);
                    }
                    else
                    {
                        listAdminViewModel = (IQueryable<AdminViewModel>)listAdminViewModel.OrderByDescending(x => x.Name);
                    }
                    break;
                case "Id":
                    if (order.ToString() == "Asc")
                    {
                        listAdminViewModel = (IQueryable<AdminViewModel>)listAdminViewModel.OrderBy(x => x.Id);
                    }
                    else
                    {
                        listAdminViewModel = (IQueryable<AdminViewModel>)listAdminViewModel.OrderByDescending(x => x.Id);
                    }
                    break;
                case "Email":
                    if (order.ToString() == "Asc")
                    {
                        listAdminViewModel = (IQueryable<AdminViewModel>)listAdminViewModel.OrderBy(x => x.Email);
                    }
                    else
                    {
                        listAdminViewModel = (IQueryable<AdminViewModel>)listAdminViewModel.OrderByDescending(x => x.Email);
                    }
                    break;
            }
            return PagedListExtensions.ToPagedList<AdminViewModel>(listAdminViewModel, pageIndex, pageSize);
        }



        public IPagedList<AdminViewModel> GetAllAdminPagein(int pageIndex, int pageSize)
        {
            var listAdmin = _res.FindBy(x => x.Status == (int)FLSStatus.Active);
            var listAdminViewModel = _mapper.Map<IEnumerable<AdminViewModel>>(listAdmin);
            return PagedListExtensions.ToPagedList<AdminViewModel>(listAdminViewModel, pageIndex, pageSize);
        }

        public async Task<AdminViewModel> UpdateAdmin(string id, UpdateAdminRequest request)
        {
            try
            {
                var listAdmin = await _res.FindByAsync(x => x.Id == id && x.Status == (int)AdminStatus.Active);
                if (listAdmin == null)
                {
                    return null;
                }
                var ad = listAdmin.FirstOrDefault();
                if (ad == null)
                {
                    return null;
                }
                ad = _mapper.Map(request, ad);
                await _res.UpdateAsync(ad);
                await _res.SaveAsync();

                var d = await GetAdminById(ad.Id);
                return _mapper.Map<AdminViewModel>(d);
            }
            catch
            {
                return null;
            }
        }
    }
}
