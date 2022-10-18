using BEAPICapstoneProjectFLS.IServices;
using BEAPICapstoneProjectFLS.Requests;
using BEAPICapstoneProjectFLS.Requests.LecturerRequest;
using BEAPICapstoneProjectFLS.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BEAPICapstoneProjectFLS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LecturerController : ControllerBase
    {
        private readonly ILecturerService _ILecturerService;

        public LecturerController(ILecturerService lecturerService)
        {
            _ILecturerService = lecturerService;
        }

        [HttpGet("{id}", Name = "GetLecturerById")]
        public async Task<IActionResult> GetLecturerById(string id)
        {
            var LecturerModel = await _ILecturerService.GetLecturerById(id);
            if (LecturerModel == null)
                return NotFound();
            return Ok(LecturerModel);
        }

        [HttpGet("email/{email}", Name = "GetLecturerByEmail")]
        public async Task<IActionResult> GetLecturerByEmail(string email)
        {
            var LecturerModel = await _ILecturerService.GetLecturerByEmail(email);
            if (LecturerModel == null)
                return NotFound();
            return Ok(LecturerModel);
        }

        [HttpGet("departmentID/{departmentID}", Name = "GetAllLecturerByDepartmentID")]
        public async Task<IActionResult> GetAllLecturerByDepartmentID(string departmentID)
        {
            var listLecturerModel = await _ILecturerService.GetAllLecturerByDepartmentID(departmentID);
            if (listLecturerModel == null)
                return NotFound();
            return Ok(listLecturerModel);
        }

        [HttpGet("Pagegin/{pageIndex}&{pageSize}", Name = "GetAllLecturerPagein")]
        public IActionResult GetAllLecturerPagegin(int pageIndex = 1, int pageSize = 10)
        {
            var listLecturerModel = _ILecturerService.GetAllLecturerPagein(pageIndex, pageSize);
            if (listLecturerModel == null)
                return NotFound();
            return Ok(listLecturerModel);
        }

        [HttpGet]
        public IActionResult GetAllLecturer([FromQuery] LecturerViewModel flitter, LecturerSortBy sortBy, OrderBy order, int pageIndex = 1, int pageSize = 1)
        {
            var listLecturerModel = _ILecturerService.GetAllLecturer(flitter, pageIndex, pageSize,sortBy, order);
            return Ok(listLecturerModel);
        }


        [HttpPost]
        public async Task<IActionResult> CreateLecturer([FromBody] CreateLecturerRequest request)
        {
            var LecturerVM = await _ILecturerService.CreateLecturer(request);
            if (LecturerVM == null)
            {
                return BadRequest();
            }
            else
            {
                return CreatedAtRoute(nameof(GetLecturerById), new { id = LecturerVM.Id }, LecturerVM);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateLecturer(string id, [FromBody] UpdateLecturerRequest request)
        {
            var LecturerVM = await _ILecturerService.UpdateLecturer(id, request);
            if (LecturerVM == null)
                return BadRequest();
            return Ok(LecturerVM);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLecturer(string id)
        {
            var rs = await _ILecturerService.DeleteLecturer(id);
            if (rs == false)
                return NotFound();
            return Ok();
        }
    }
}
