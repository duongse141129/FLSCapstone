using BEAPICapstoneProjectFLS.IServices;
using BEAPICapstoneProjectFLS.Requests;
using BEAPICapstoneProjectFLS.Requests.LecturerSlotConfigRequest;
using BEAPICapstoneProjectFLS.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BEAPICapstoneProjectFLS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LecturerSlotConfigController : ControllerBase
    {
        private readonly ILecturerSlotConfigService _ILecturerSlotConfigService;

        public LecturerSlotConfigController(ILecturerSlotConfigService LecturerSlotConfigService)
        {
            _ILecturerSlotConfigService = LecturerSlotConfigService;
        }

        [HttpGet("{id}", Name = "GetLecturerSlotConfigById")]
        public async Task<IActionResult> GetLecturerSlotConfigById(string id)
        {
            var LecturerSlotConfigModel = await _ILecturerSlotConfigService.GetLecturerSlotConfigById(id);
            if (LecturerSlotConfigModel == null)
                return NotFound();
            return Ok(LecturerSlotConfigModel);
        }

        [HttpGet]
        public IActionResult GetAllLecturerSlotConfig([FromQuery] LecturerSlotConfigViewModel flitter, LecturerSlotConfigSortBy sortBy, OrderBy order, int pageIndex = 1, int pageSize = 1)
        {
            var listLecturerSlotConfigModel = _ILecturerSlotConfigService.GetAllLecturerSlotConfig(flitter, pageIndex, pageSize, sortBy, order);
            return Ok(listLecturerSlotConfigModel);
        }

        [HttpPost]
        public async Task<IActionResult> CreateLecturerSlotConfig([FromBody] CreateLecturerSlotConfigRequest request)
        {
            var LecturerSlotConfigVM = await _ILecturerSlotConfigService.CreateLecturerSlotConfig(request);
            if (LecturerSlotConfigVM == null)
            {
                return BadRequest();
            }
            else
            {
                return CreatedAtRoute(nameof(GetLecturerSlotConfigById), new { id = LecturerSlotConfigVM.Id }, LecturerSlotConfigVM);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateLecturerSlotConfig(string id, [FromBody] UpdateLecturerSlotConfigRequest request)
        {
            var LecturerSlotConfigVM = await _ILecturerSlotConfigService.UpdateLecturerSlotConfig(id, request);
            if (LecturerSlotConfigVM == null)
                return BadRequest();
            return Ok(LecturerSlotConfigVM);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLecturerSlotConfig(string id)
        {
            var rs = await _ILecturerSlotConfigService.DeleteLecturerSlotConfig(id);
            if (rs == false)
                return NotFound();
            return Ok();
        }
    }
}
