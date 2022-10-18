using AutoMapper;
using BEAPICapstoneProjectFLS.Entities;
using BEAPICapstoneProjectFLS.Enum;
using BEAPICapstoneProjectFLS.Requests.DepartmentGroupRequest;
using BEAPICapstoneProjectFLS.Requests.SemesterRequest;
using BEAPICapstoneProjectFLS.ViewModel;
using System;
using System.Linq;

namespace BEAPICapstoneProjectFLS.AutoMapper
{
    public class SemesterMapper: Profile
    {
        public SemesterMapper()
        {
            CreateMap<Semester, SemesterViewModel>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)SemesterStatus.Active))
                .ForMember(d => d.DateStartFormat, s => s.MapFrom(s => ConvertDateTimeToString(s.DateStart)))
                .ForMember(d => d.DateEndFormat, s => s.MapFrom(s => ConvertDateTimeToString(s.DateEnd)));

            CreateMap<SemesterViewModel, Semester>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)SemesterStatus.Active));
            CreateMap<CreateSemesterRequest, Semester>().ForMember(des
                => des.Status, opt => opt.MapFrom(src => (int)SemesterStatus.Active));
            CreateMap<UpdateSemesterRequest, Semester>().ForMember(des
                => des.Status, opt => opt.MapFrom(src => (int)SemesterStatus.Active));
        }
        private static string ConvertDateTimeToString(DateTime? date)
        {
            if (date != null) return date?.ToString("yyyy-MM-dd");
            return null;
        }
    }
}
