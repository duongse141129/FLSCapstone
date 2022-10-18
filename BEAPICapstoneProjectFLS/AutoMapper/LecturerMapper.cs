using AutoMapper;
using BEAPICapstoneProjectFLS.Entities;
using BEAPICapstoneProjectFLS.Enum;
using BEAPICapstoneProjectFLS.Requests.DepartmentRequest;
using BEAPICapstoneProjectFLS.Requests.LecturerRequest;
using BEAPICapstoneProjectFLS.ViewModel;
using System;

namespace BEAPICapstoneProjectFLS.AutoMapper
{
    public class LecturerMapper : Profile
    {
        public LecturerMapper()
        {
            CreateMap<Lecturer, LecturerViewModel>()
                .ForMember(d => d.Gender, s => s.MapFrom(s => MappingGender(s.Gender)))
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)LecturerStatus.Active))
                .ForMember(d => d.Dob, s => s.MapFrom(s => s.Dob))
                .ForMember(d => d.DateOfBirthFormatted, s => s.MapFrom(s => ConvertDateTimeToString(s.Dob)))
                .ForMember(des => des.DepartmentName, s => s.MapFrom(s => s.Department.DepartmentName));

                //.ForMember(d => d.Dob, s => s.MapFrom(s => ConvertDateTimeToString(s.Dob)))
              //  .ForMember(d => d.Dob, s => s.MapFrom(s => s.Dob));
            //.ForMember(des => des.DepartmentName, s => s.MapFrom(s => s.Department.DepartmentName));

            CreateMap<LecturerViewModel, Lecturer>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)DepartmentStatus.Active))
                .ForMember(d => d.Gender, s => s.MapFrom(s => (int)s.Gender)); 

            CreateMap<CreateLecturerRequest, Lecturer>().ForMember(des
                => des.Status, opt => opt.MapFrom(src => (int)LecturerStatus.Active))
                .ForMember(d => d.Gender, s => s.MapFrom(s => (int)s.Gender));
            CreateMap<UpdateLecturerRequest, Lecturer>().ForMember(des
                => des.Status, opt => opt.MapFrom(src => (int)LecturerStatus.Active))
                .ForMember(d => d.Gender, s => s.MapFrom(s => (int)s.Gender));
        }

        private static Gender MappingGender(int? i)
        {
            if (i == 2) return Gender.Male;
            else if (i == 1) return Gender.Female;
            return Gender.Unknown;
        }

        private static string ConvertDateTimeToString(DateTime? date)
        {
            if (date != null) return date?.ToString("yyyy-MM-dd");
            return null;
        }
    }
}
