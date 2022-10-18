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
using BEAPICapstoneProjectFLS.Requests.LecturerSlotConfigRequest;

namespace BEAPICapstoneProjectFLS.Services
{
    public class LecturerSlotConfigService : ILecturerSlotConfigService
    {
        private readonly IGenericRepository<LecturerSlotConfig> _res;
        private readonly IMapper _mapper;

        public LecturerSlotConfigService(IGenericRepository<LecturerSlotConfig> repository, IMapper mapper)
        {
            _res = repository;
            _mapper = mapper;
        }

        public async Task<LecturerSlotConfigViewModel> CreateLecturerSlotConfig(CreateLecturerSlotConfigRequest request)
        {
            try
            {
                var lsc = _mapper.Map<LecturerSlotConfig>(request);
                lsc.Id = RandomPKKey.NewRamDomPKKey();
                await _res.InsertAsync(lsc);
                await _res.SaveAsync();
                return _mapper.Map<LecturerSlotConfigViewModel>(lsc);
            }
            catch
            {
                return null;
            }

        }

        public async Task<bool> DeleteLecturerSlotConfig(string id)
        {
            var lecturerSlotConfig = (await _res.FindByAsync(x => x.Id == id && x.Status == (int)LecturerSlotConfigStatus.Active)).FirstOrDefault();
            if (lecturerSlotConfig == null)
            {
                return false;
            }
            lecturerSlotConfig.Status = 0;
            await _res.UpdateAsync(lecturerSlotConfig);
            await _res.SaveAsync();
            return true;
        }

        public IPagedList<LecturerSlotConfigViewModel> GetAllLecturerSlotConfig(LecturerSlotConfigViewModel flitter, int pageIndex, int pageSize, LecturerSlotConfigSortBy sortBy, OrderBy order)
        {
            var listLecturerSlotConfig = _res.FindBy(x => x.Status == (int)FLSStatus.Active);

            var listLecturerSlotConfigViewModel = (listLecturerSlotConfig.ProjectTo<LecturerSlotConfigViewModel>
                (_mapper.ConfigurationProvider)).DynamicFilter(flitter);
            switch (sortBy.ToString())
            {
                case "LecturerId":
                    if (order.ToString() == "Asc")
                    {
                        listLecturerSlotConfigViewModel = (IQueryable<LecturerSlotConfigViewModel>)listLecturerSlotConfigViewModel.OrderBy(x => x.LecturerId);
                    }
                    else
                    {
                        listLecturerSlotConfigViewModel = (IQueryable<LecturerSlotConfigViewModel>)listLecturerSlotConfigViewModel.OrderByDescending(x => x.LecturerId);
                    }
                    break;
                case "Id":
                    if (order.ToString() == "Asc")
                    {
                        listLecturerSlotConfigViewModel = (IQueryable<LecturerSlotConfigViewModel>)listLecturerSlotConfigViewModel.OrderBy(x => x.Id);
                    }
                    else
                    {
                        listLecturerSlotConfigViewModel = (IQueryable<LecturerSlotConfigViewModel>)listLecturerSlotConfigViewModel.OrderByDescending(x => x.Id);
                    }
                    break;
            }
            return PagedListExtensions.ToPagedList<LecturerSlotConfigViewModel>(listLecturerSlotConfigViewModel, pageIndex, pageSize);
        }


        public async Task<LecturerSlotConfigViewModel> GetLecturerSlotConfigById(string id)
        {

            var lsc = await _res.GetAllByIQueryable()
                .Where(x => x.Id == id && x.Status == (int)LecturerSlotConfigStatus.Active)
                .Include(x => x.SlotType)
                .Include(x => x.Semester)
                .Include(x => x.Lecturer)
                .FirstOrDefaultAsync();
            if (lsc == null)
                return null;
            var lecturerSlotConfigVM = _mapper.Map<LecturerSlotConfigViewModel>(lsc);
            return lecturerSlotConfigVM;
        }

        public async Task<LecturerSlotConfigViewModel> UpdateLecturerSlotConfig(string id, UpdateLecturerSlotConfigRequest request)
        {
            try
            {
                var listLecturerSlotConfig = await _res.FindByAsync(x => x.Id == id && x.Status == (int)LecturerSlotConfigStatus.Active);
                if (listLecturerSlotConfig == null)
                {
                    return null;
                }
                var lecturerSlotConfig = listLecturerSlotConfig.FirstOrDefault();
                if (lecturerSlotConfig == null)
                {
                    return null;
                }
                lecturerSlotConfig = _mapper.Map(request, lecturerSlotConfig);
                await _res.UpdateAsync(lecturerSlotConfig);
                await _res.SaveAsync();

                return _mapper.Map<LecturerSlotConfigViewModel>(lecturerSlotConfig);
            }
            catch
            {
                return null;
            }
        }
    }
}
