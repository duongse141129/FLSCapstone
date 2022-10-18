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
using BEAPICapstoneProjectFLS.Requests.Request;

namespace BEAPICapstoneProjectFLS.Services
{
    public class RequestService : IRequestService
    {
        private readonly IGenericRepository<Request> _res;
        private readonly IMapper _mapper;

        public RequestService(IGenericRepository<Request> repository, IMapper mapper)
        {
            _res = repository;
            _mapper = mapper;
        }

        public async Task<RequestViewModel> CreateRequest(CreateRequest request)
        {
            try
            {
                var re = _mapper.Map<Request>(request);
                re.Id = RandomPKKey.NewRamDomPKKey();
                await _res.InsertAsync(re);
                await _res.SaveAsync();
                return _mapper.Map<RequestViewModel>(re);
            }
            catch
            {
                return null;
            }

        }

        public async Task<bool> DeleteRequest(string id)
        {
            var request = (await _res.FindByAsync(x => x.Id == id && x.Status == (int)RequestStatus.Active)).FirstOrDefault();
            if (request == null)
            {
                return false;
            }
            request.Status = 0;
            await _res.UpdateAsync(request);
            await _res.SaveAsync();
            return true;
        }

        public IPagedList<RequestViewModel> GetAllRequest(RequestViewModel flitter, int pageIndex, int pageSize, RequestSortBy sortBy, OrderBy order)
        {
            var listRequest = _res.FindBy(x => x.Status == (int)FLSStatus.Active);

            var listRequestViewModel = (listRequest.ProjectTo<RequestViewModel>
                (_mapper.ConfigurationProvider)).DynamicFilter(flitter);
            switch (sortBy.ToString())
            {
                case "Title":
                    if (order.ToString() == "Asc")
                    {
                        listRequestViewModel = (IQueryable<RequestViewModel>)listRequestViewModel.OrderBy(x => x.Title);
                    }
                    else
                    {
                        listRequestViewModel = (IQueryable<RequestViewModel>)listRequestViewModel.OrderByDescending(x => x.Title);
                    }
                    break;
                case "Id":
                    if (order.ToString() == "Asc")
                    {
                        listRequestViewModel = (IQueryable<RequestViewModel>)listRequestViewModel.OrderBy(x => x.Id);
                    }
                    else
                    {
                        listRequestViewModel = (IQueryable<RequestViewModel>)listRequestViewModel.OrderByDescending(x => x.Id);
                    }
                    break;
                case "DateCreate":
                    if (order.ToString() == "Asc")
                    {
                        listRequestViewModel = (IQueryable<RequestViewModel>)listRequestViewModel.OrderBy(x => x.DateCreate);
                    }
                    else
                    {
                        listRequestViewModel = (IQueryable<RequestViewModel>)listRequestViewModel.OrderByDescending(x => x.DateCreate);
                    }
                    break;
            }
            return PagedListExtensions.ToPagedList<RequestViewModel>(listRequestViewModel, pageIndex, pageSize);
        }


        public async Task<RequestViewModel> GetRequestById(string id)
        {

            var re = await _res.GetAllByIQueryable()
                .Where(x => x.Id == id && x.Status == (int)RequestStatus.Active)
                .Include(x => x.Lecturer)
                .Include(x => x.DepartmentManager)
                .FirstOrDefaultAsync();
            if (re == null)
                return null;
            var RequestVM = _mapper.Map<RequestViewModel>(re);
            return RequestVM;
        }

        public async Task<RequestViewModel> UpdateRequest(string id, UpdateRequest request)
        {
            try
            {
                var listRequest = await _res.FindByAsync(x => x.Id == id && x.Status == (int)RequestStatus.Active);
                if (listRequest == null)
                {
                    return null;
                }
                var upRequest = listRequest.FirstOrDefault();
                if (upRequest == null)
                {
                    return null;
                }
                upRequest = _mapper.Map(request, upRequest);
                await _res.UpdateAsync(upRequest);
                await _res.SaveAsync();

                return _mapper.Map<RequestViewModel>(upRequest);
            }
            catch
            {
                return null;
            }
        }
    }
}
