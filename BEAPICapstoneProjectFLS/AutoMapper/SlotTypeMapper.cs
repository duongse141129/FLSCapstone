using AutoMapper;
using BEAPICapstoneProjectFLS.Entities;
using BEAPICapstoneProjectFLS.Enum;
using BEAPICapstoneProjectFLS.Requests.SlotTypeRequest;
using BEAPICapstoneProjectFLS.ViewModel;
namespace BEAPICapstoneProjectFLS.AutoMapper
{
    public class SlotTypeMapper : Profile
    {
        public SlotTypeMapper()
        {
            CreateMap<SlotType, SlotTypeViewModel>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)SlotTypeStatus.Active));

            CreateMap<SlotTypeViewModel, SlotType>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)SlotTypeStatus.Active));

            CreateMap<CreateSlotTypeRequest, SlotType>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)SlotTypeStatus.Active));

            CreateMap<UpdateSlotTypeRequest, SlotType>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)SlotTypeStatus.Active));
        }
    }
}
