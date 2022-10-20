using AutoMapper;
using BEAPICapstoneProjectFLS.Entities;
using BEAPICapstoneProjectFLS.Enum;
using BEAPICapstoneProjectFLS.Requests.SlotTypeRequest;
using BEAPICapstoneProjectFLS.ViewModel;
using System;

namespace BEAPICapstoneProjectFLS.AutoMapper
{
    public class SlotTypeMapper : Profile
    {
        public SlotTypeMapper()
        {
            CreateMap<SlotType, SlotTypeViewModel>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)SlotTypeStatus.Active))
                .ForMember(d => d.Duration, s => s.MapFrom(s => ConvertTimeToDuration(s.TimeStart, s.TimeEnd)))
                .ForMember(d => d.ConvertDateOfWeek, s => s.MapFrom(s => ConvertDateOfWeek(s.DateOfWeek)));

            CreateMap<SlotTypeViewModel, SlotType>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)SlotTypeStatus.Active));

            CreateMap<CreateSlotTypeRequest, SlotType>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)SlotTypeStatus.Active));

            CreateMap<UpdateSlotTypeRequest, SlotType>()
                .ForMember(des => des.Status, opt => opt.MapFrom(src => (int)SlotTypeStatus.Active));
        }

        private static string ConvertDateOfWeek(int? dateOfWeek)
        {
            if(dateOfWeek == null)
            {
                return null;
            }
            else
            {
                string result = "";
                int n = (int)dateOfWeek;
                int countTwiceWeek = 0;
                for (int i = 0; n > 0; i++)
                {
                    if (n % 2 == 1)
                    {
                        countTwiceWeek++;
                        if(countTwiceWeek == 2)
                        {
                            result += "T" + i;
                        }
                        else
                        {
                            result += "T" + i + ";";
                        }
                    }

                    n = n / 2;
                }
                return result;
            }


            //if (dateOfWeek.HasValue && dateOfWeek !=null)
            //{
            //    string result = "";
            //    int n = (int)dateOfWeek;
            //    for (int i = 0; n > 0; i++)
            //    {
            //        if (n % 2 == 1)
            //        {
            //            result += "T" + i;
            //        }
            //        n = n / 2;
            //    }
            //    return result;
            //}          
            //return null;
        }

        private static string ConvertTimeToDuration(TimeSpan? timeStart, TimeSpan? timeEnd)
        {
           
            //if(timeStart != null && timeEnd != null && timeStart.HasValue && timeEnd.HasValue)
            //{
            //    String result;
            //    result = timeStart?.ToString(@"hh\:mm")+" - " + timeEnd?.ToString(@"hh\:mm");
            //}
            //return null;


            if(timeStart == null && timeEnd == null)
            {
                return null;
            }
            else
            {
                String result;
                result = timeStart?.ToString(@"hh\:mm") + " - " + timeEnd?.ToString(@"hh\:mm");
                return result;  
            }
        }
    }
}
