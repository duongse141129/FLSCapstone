using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BEAPICapstoneProjectFLS.IServices;
using BEAPICapstoneProjectFLS.Requests;
using BEAPICapstoneProjectFLS.Requests.DepartmentManagerRequest;
using BEAPICapstoneProjectFLS.ViewModel;
using System.Threading.Tasks;

namespace BEAPICapstoneProjectFLS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentManagerController : ControllerBase
    {
        private readonly IDepartmentManagerService _IDepartmentManagerService;

        public DepartmentManagerController(IDepartmentManagerService DepartmentManagerService)
        {
            _IDepartmentManagerService = DepartmentManagerService;
        }

        [HttpGet("{id}", Name = "GetDepartmentManagerById")]
        public async Task<IActionResult> GetDepartmentManagerById(string id)
        {
            var DepartmentManagerModel = await _IDepartmentManagerService.GetDepartmentManagerById(id);
            if (DepartmentManagerModel == null)
                return NotFound();
            return Ok(DepartmentManagerModel);
        }

        [HttpGet("email/{email}", Name = "GetDepartmentManagerByEmail")]
        public async Task<IActionResult> GetDepartmentManagerByEmail(string email)
        {
            var DepartmentManagerModel = await _IDepartmentManagerService.GetDepartmentManagerByEmail(email);
            if (DepartmentManagerModel == null)
                return NotFound();
            return Ok(DepartmentManagerModel);
        }

        [HttpGet("departmentID/{departmentID}", Name = "GetAllDepartmentManagerByDepartmentID")]
        public async Task<IActionResult> GetAllDepartmentManagerByDepartmentID(string departmentID)
        {
            var listDepartmentManagerModel = await _IDepartmentManagerService.GetAllDepartmentManagerByDepartmentID(departmentID);
            if (listDepartmentManagerModel == null)
                return NotFound();
            return Ok(listDepartmentManagerModel);
        }

        [HttpGet("Pagegin/{pageIndex}&{pageSize}", Name = "GetAllDepartmentManagerPagein")]
        public IActionResult GetAllDepartmentManagerPagegin(int pageIndex = 1, int pageSize = 10)
        {
            var listDepartmentManagerModel = _IDepartmentManagerService.GetAllDepartmentManagerPagein(pageIndex, pageSize);
            if (listDepartmentManagerModel == null)
                return NotFound();
            return Ok(listDepartmentManagerModel);
        }

        [HttpGet]
        public IActionResult GetAllDepartmentManager([FromQuery] DepartmentManagerViewModel flitter, DepartmentManagerSortBy sortBy, OrderBy order, int pageIndex = 1, int pageSize = 1)
        {
            var listDepartmentManagerModel = _IDepartmentManagerService.GetAllDepartmentManager(flitter, pageIndex, pageSize, sortBy, order);
            return Ok(listDepartmentManagerModel);
        }


        [HttpPost]
        public async Task<IActionResult> CreateDepartmentManager([FromBody] CreateDepartmentManagerRequest request)
        {
            var DepartmentManagerVM = await _IDepartmentManagerService.CreateDepartmentManager(request);
            if (DepartmentManagerVM == null)
            {
                return BadRequest();
            }
            else
            {
                return CreatedAtRoute(nameof(GetDepartmentManagerById), new { id = DepartmentManagerVM.Id }, DepartmentManagerVM);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDepartmentManager(string id, [FromBody] UpdateDepartmentManagerRequest request)
        {
            var DepartmentManagerVM = await _IDepartmentManagerService.UpdateDepartmentManager(id, request);
            if (DepartmentManagerVM == null)
                return BadRequest();
            return Ok(DepartmentManagerVM);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDepartmentManager(string id)
        {
            var rs = await _IDepartmentManagerService.DeleteDepartmentManager(id);
            if (rs == false)
                return NotFound();
            return Ok();
        }
    }
}
