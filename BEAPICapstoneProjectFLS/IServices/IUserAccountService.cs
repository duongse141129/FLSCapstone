using BEAPICapstoneProjectFLS.ViewModel;
using System.Threading.Tasks;

namespace BEAPICapstoneProjectFLS.IServices
{
    public interface IUserAccountService
    {
        Task<UserAccountViewModel> GetAccountByEmail(string email);
    }
}
