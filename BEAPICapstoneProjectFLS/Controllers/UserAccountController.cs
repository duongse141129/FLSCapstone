using BEAPICapstoneProjectFLS.IServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BEAPICapstoneProjectFLS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserAccountController : ControllerBase
    {
        private readonly IUserAccountService _IUserAccountService;

        public UserAccountController(IUserAccountService userAccountService)
        {
            _IUserAccountService = userAccountService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAccountByEmail(string email)
        {
            var result = await _IUserAccountService.GetAccountByEmail(email);
            if (result == null)
                return NotFound();
            return Ok(result);
        }
    }
}
