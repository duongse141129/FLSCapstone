using AutoMapper;
using BEAPICapstoneProjectFLS.Entities;
using BEAPICapstoneProjectFLS.Enum;
using BEAPICapstoneProjectFLS.Requests.Request;
using BEAPICapstoneProjectFLS.ViewModel;

namespace BEAPICapstoneProjectFLS.AutoMapper
{
    public class RequestMapper : Profile
    {
        public RequestMapper()
        {
            CreateMap<Request, RequestViewModel>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)RequestStatus.Active))
                .ForMember(des => des.LecturerName, s => s.MapFrom(s => s.Lecturer.Name))
                .ForMember(des => des.DepartmentManagerName, s => s.MapFrom(s => s.DepartmentManager.Name));

            CreateMap<RequestViewModel, Request>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)RequestStatus.Active));

            CreateMap<CreateRequest, Request>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)RequestStatus.Active));

            CreateMap<UpdateRequest, Request>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)RequestStatus.Active));
        }
    }
}
