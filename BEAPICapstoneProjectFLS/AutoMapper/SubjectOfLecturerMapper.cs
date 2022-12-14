using AutoMapper;
using BEAPICapstoneProjectFLS.Entities;
using BEAPICapstoneProjectFLS.Enum;
using BEAPICapstoneProjectFLS.Requests.SubjectOfLecturerRequest;
using BEAPICapstoneProjectFLS.ViewModel;
namespace BEAPICapstoneProjectFLS.AutoMapper
{
    public class SubjectOfLecturerMapper : Profile
    {
        public SubjectOfLecturerMapper()
        {
            CreateMap<SubjectOfLecturer, SubjectOfLecturerViewModel>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)SubjectOfLecturerStatus.Active))
                .ForMember(des => des.LecturerName, s => s.MapFrom(s => s.Lecturer.Name))
                .ForMember(des => des.DepartmentManagerName, s => s.MapFrom(s => s.DepartmentManager.Name))
                .ForMember(des => des.Term, s => s.MapFrom(s => s.Semester.Term))
                .ForMember(des => des.SubjectName, s => s.MapFrom(s => s.Subject.SubjectName))
                .ForMember(des => des.DepartmentName, s => s.MapFrom(s => s.Subject.Department.DepartmentName))
                .ForMember(des => des.InOrOut, s => s.MapFrom(s => InOutDepartment(s.Subject.DepartmentId, s.Lecturer.DepartmentId)));

            CreateMap<SubjectOfLecturerViewModel, SubjectOfLecturer>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)SubjectOfLecturerStatus.Active));

            CreateMap<CreateSubjectOfLecturerRequest, SubjectOfLecturer>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)SubjectOfLecturerStatus.Active));

            CreateMap<UpdateSubjectOfLecturerRequest, SubjectOfLecturer>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)SubjectOfLecturerStatus.Active));
        }


        private static string InOutDepartment(string departmentIDOfSubject, string departmentIDOfLecturer)
        {
            if(departmentIDOfSubject == departmentIDOfLecturer)
            {
                return "internal";
            }
            return "external";
        }
    }
}
