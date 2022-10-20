using BEAPICapstoneProjectFLS.IServices;
using BEAPICapstoneProjectFLS.Requests;
using BEAPICapstoneProjectFLS.Requests.Request;
using BEAPICapstoneProjectFLS.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BEAPICapstoneProjectFLS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestController : ControllerBase
    {
        private readonly IRequestService _IRequestService;

        public RequestController(IRequestService RequestService)
        {
            _IRequestService = RequestService;
        }

        [HttpGet("{id}", Name = "GetRequestById")]
        public async Task<IActionResult> GetRequestById(string id)
        {
            var RequestModel = await _IRequestService.GetRequestById(id);
            if (RequestModel == null)
                return NotFound();
            return Ok(RequestModel);
        }

        [HttpGet]
        public IActionResult GetAllRequest([FromQuery] RequestViewModel flitter, RequestSortBy sortBy, OrderBy order, int pageIndex = 1, int pageSize = 10)
        {
            var listRequestModel = _IRequestService.GetAllRequest(flitter, pageIndex, pageSize, sortBy, order);
            return Ok(listRequestModel);
        }

        [HttpPost]
        public async Task<IActionResult> CreateRequest([FromBody] CreateRequest request)
        {
            var RequestVM = await _IRequestService.CreateRequest(request);
            if (RequestVM == null)
            {
                return BadRequest();
            }
            else
            {
                return CreatedAtRoute(nameof(GetRequestById), new { id = RequestVM.Id }, RequestVM);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRequest(string id, [FromBody] UpdateRequest request)
        {
            var RequestVM = await _IRequestService.UpdateRequest(id, request);
            if (RequestVM == null)
                return BadRequest();
            return Ok(RequestVM);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRequest(string id)
        {
            var rs = await _IRequestService.DeleteRequest(id);
            if (rs == false)
                return NotFound();
            return Ok();
        }
    }
}
