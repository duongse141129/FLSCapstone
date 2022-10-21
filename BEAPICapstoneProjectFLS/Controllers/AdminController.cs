using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BEAPICapstoneProjectFLS.IServices;
using BEAPICapstoneProjectFLS.Requests;
using BEAPICapstoneProjectFLS.Requests.LecturerRequest;
using BEAPICapstoneProjectFLS.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using BEAPICapstoneProjectFLS.Requests.AdminRequest;

namespace BEAPICapstoneProjectFLS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminService _IAdminService;

        public AdminController(IAdminService AdminService)
        {
            _IAdminService = AdminService;
        }

        [HttpGet("{id}", Name = "GetAdminById")]
        public async Task<IActionResult> GetAdminById(string id)
        {
            var AdminModel = await _IAdminService.GetAdminById(id);
            if (AdminModel == null)
                return NotFound();
            return Ok(AdminModel);
        }

        [HttpGet("email/{email}", Name = "GetAdminByEmail")]
        public async Task<IActionResult> GetAdminByEmail(string email)
        {
            var AdminModel = await _IAdminService.GetAdminByEmail(email);
            if (AdminModel == null)
                return NotFound();
            return Ok(AdminModel);
        }



        [HttpGet("Pagegin/{pageIndex}&{pageSize}", Name = "GetAllAdminPagein")]
        public IActionResult GetAllAdminPagegin(int pageIndex = 1, int pageSize = 10)
        {
            var listAdminModel = _IAdminService.GetAllAdminPagein(pageIndex, pageSize);
            if (listAdminModel == null)
                return NotFound();
            return Ok(listAdminModel);
        }

        [HttpGet]
        public IActionResult GetAllAdmin([FromQuery] AdminViewModel flitter, AdminSortBy sortBy, OrderBy order, int pageIndex = 1, int pageSize = 10)
        {
            var listAdminModel = _IAdminService.GetAllAdmin(flitter, pageIndex, pageSize, sortBy, order);
            return Ok(listAdminModel);
        }


        [HttpPost]
        public async Task<IActionResult> CreateAdmin([FromBody] CreateAdminRequest request)
        {
            var AdminVM = await _IAdminService.CreateAdmin(request);
            if (AdminVM == null)
            {
                return BadRequest();
            }
            else
            {
                return CreatedAtRoute(nameof(GetAdminById), new { id = AdminVM.Id }, AdminVM);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAdmin(string id, [FromBody] UpdateAdminRequest request)
        {
            var AdminVM = await _IAdminService.UpdateAdmin(id, request);
            if (AdminVM == null)
                return BadRequest();
            return Ok(AdminVM);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdmin(string id)
        {
            var rs = await _IAdminService.DeleteAdmin(id);
            if (rs == false)
                return NotFound();
            return Ok();
        }
    }
}
