using BEAPICapstoneProjectFLS.IServices;
using BEAPICapstoneProjectFLS.Requests;
using BEAPICapstoneProjectFLS.Requests.SlotTypeRequest;
using BEAPICapstoneProjectFLS.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BEAPICapstoneProjectFLS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SlotTypeController : ControllerBase
    {
        private readonly ISlotTypeService _ISlotTypeService;

        public SlotTypeController(ISlotTypeService SlotTypeService)
        {
            _ISlotTypeService = SlotTypeService;
        }

        [HttpGet("{id}", Name = "GetSlotTypeById")]
        public async Task<IActionResult> GetSlotTypeById(string id)
        {
            var SlotTypeModel = await _ISlotTypeService.GetSlotTypeById(id);
            if (SlotTypeModel == null)
                return NotFound();
            return Ok(SlotTypeModel);
        }

        [HttpGet]
        public IActionResult GetAllSlotType([FromQuery] SlotTypeViewModel flitter, SlotTypeSortBy sortBy, OrderBy order, int pageIndex = 1, int pageSize = 10)
        {
            var listSlotTypeModel = _ISlotTypeService.GetAllSlotType(flitter, pageIndex, pageSize, sortBy, order);
            return Ok(listSlotTypeModel);
        }

        [HttpPost]
        public async Task<IActionResult> CreateSlotType([FromBody] CreateSlotTypeRequest request)
        {
            var SlotTypeVM = await _ISlotTypeService.CreateSlotType(request);
            if (SlotTypeVM == null)
            {
                return BadRequest();
            }
            else
            {
                return CreatedAtRoute(nameof(GetSlotTypeById), new { id = SlotTypeVM.Id }, SlotTypeVM);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSlotType(string id, [FromBody] UpdateSlotTypeRequest request)
        {
            var SlotTypeVM = await _ISlotTypeService.UpdateSlotType(id, request);
            if (SlotTypeVM == null)
                return BadRequest();
            return Ok(SlotTypeVM);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSlotType(string id)
        {
            var rs = await _ISlotTypeService.DeleteSlotType(id);
            if (rs == false)
                return NotFound();
            return Ok();
        }
    }
}
