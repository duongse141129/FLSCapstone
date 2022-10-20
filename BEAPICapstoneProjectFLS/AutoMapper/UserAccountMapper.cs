using AutoMapper;
using BEAPICapstoneProjectFLS.Entities;
using BEAPICapstoneProjectFLS.ViewModel;

namespace BEAPICapstoneProjectFLS.AutoMapper
{
    public class UserAccountMapper : Profile
    {
        public UserAccountMapper()
        {
            CreateMap<UserAccount, UserAccountViewModel>();

            CreateMap<UserAccountViewModel, UserAccount>();
        }
    }
}
