using AutoMapper;
using BEAPICapstoneProjectFLS.Entities;
using BEAPICapstoneProjectFLS.Enum;
using BEAPICapstoneProjectFLS.Requests.CourseAssignRequest;
using BEAPICapstoneProjectFLS.ViewModel;
namespace BEAPICapstoneProjectFLS.AutoMapper
{
    public class CourseAssignMapper : Profile
    {
        public CourseAssignMapper()
        {
            CreateMap<CourseAssign, CourseAssignViewModel>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)CourseAssignStatus.Active))
                .ForMember(des => des.SlotTypeCode, s => s.MapFrom(s => s.SlotType.SlotTypeCode))
                .ForMember(des => des.LecturerName, s => s.MapFrom(s => s.Lecturer.Name));

            CreateMap<CourseAssignViewModel, CourseAssign>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)CourseAssignStatus.Active));

            CreateMap<CreateCourseAssignRequest, CourseAssign>().ForMember(des
                => des.Status, opt => opt.MapFrom(src => (int)CourseAssignStatus.Active));
            CreateMap<UpdateCourseAssignRequest, CourseAssign>().ForMember(des
                => des.Status, opt => opt.MapFrom(src => (int)CourseAssignStatus.Active));
        }
    }
}
