using AutoMapper;
using BEAPICapstoneProjectFLS.Entities;
using BEAPICapstoneProjectFLS.IRepositories;
using BEAPICapstoneProjectFLS.IServices;
using BEAPICapstoneProjectFLS.ViewModel;
using System.Threading.Tasks;

namespace BEAPICapstoneProjectFLS.Services
{
    public class UserAccountService : IUserAccountService
    {
        private readonly IGenericRepository<UserAccount> _res;
        private readonly IMapper _mapper;
        private readonly ILecturerService _lecturer;
        private readonly IAdminService _admin;
        private readonly IDepartmentManagerService _departmentManager;

        public UserAccountService(IGenericRepository<UserAccount> repository, IMapper mapper,
            ILecturerService lecturerService, IAdminService admin, IDepartmentManagerService departmentManager)
        {
            _res = repository;
            _mapper = mapper;
            _lecturer = lecturerService;
            _admin = admin;
            _departmentManager = departmentManager;

        }
        public async Task<UserAccountViewModel> GetAccountByEmail(string email)
        {
            var result = await _lecturer.GetLecturerByEmail(email);
            if(result != null)
            {
                return new UserAccountViewModel
                {
                    Id = result.Id,
                    Email = result.Email,
                    Name = result.Name, 
                    Role = "lecturer"
                };
            }
            var resultDepartManager = await _departmentManager.GetDepartmentManagerByEmail(email);
            if (resultDepartManager != null)
            {
                return new UserAccountViewModel
                {
                    Id = resultDepartManager.Id,
                    Email = resultDepartManager.Email,
                    Name = resultDepartManager.Name,
                    Role = "departmentmanager"
                };
            }
            var resultAdmmin = await _admin.GetAdminByEmail(email);
            if (resultAdmmin != null)
            {
                return new UserAccountViewModel
                {
                    Id = resultAdmmin.Id,
                    Email = resultAdmmin.Email,
                    Name = resultAdmmin.Name,
                    Role = "admin"
                };
            }
            return null;
        }
    }
}
