using AutoMapper;
using BEAPICapstoneProjectFLS.Entities;
using BEAPICapstoneProjectFLS.Enum;
using BEAPICapstoneProjectFLS.Requests.AdminRequest;
using BEAPICapstoneProjectFLS.Requests.DepartmentGroupRequest;
using BEAPICapstoneProjectFLS.ViewModel;
using System;
using System.Linq;

namespace BEAPICapstoneProjectFLS.AutoMapper
{
    public class AdminMapper: Profile
    {
        public AdminMapper()
        {
            CreateMap<Admin, AdminViewModel>()
                .ForMember(d => d.Gender, s => s.MapFrom(s => MappingGender(s.Gender)))
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)AdminStatus.Active))
                .ForMember(d => d.Dob, s => s.MapFrom(s => s.Dob))
                .ForMember(d => d.DateOfBirthFormatted, s => s.MapFrom(s => ConvertDateTimeToString(s.Dob)));

            CreateMap<AdminViewModel, Admin>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)DepartmentStatus.Active))
                .ForMember(d => d.Gender, s => s.MapFrom(s => (int)s.Gender));

            CreateMap<CreateAdminRequest, Admin>().ForMember(des
                => des.Status, opt => opt.MapFrom(src => (int)AdminStatus.Active))
                .ForMember(d => d.Gender, s => s.MapFrom(s => (int)s.Gender));
            CreateMap<UpdateAdminRequest, Admin>().ForMember(des
                => des.Status, opt => opt.MapFrom(src => (int)AdminStatus.Active))
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
