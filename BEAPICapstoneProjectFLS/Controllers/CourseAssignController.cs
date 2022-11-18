using BEAPICapstoneProjectFLS.IServices;
using BEAPICapstoneProjectFLS.Requests;
using BEAPICapstoneProjectFLS.Requests.CourseAssignRequest;
using BEAPICapstoneProjectFLS.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BEAPICapstoneProjectFLS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseAssignController : ControllerBase
    {
        private readonly ICourseAssignService _ICourseAssignService;

        public CourseAssignController(ICourseAssignService CourseAssignService)
        {
            _ICourseAssignService = CourseAssignService;
        }

        [HttpGet("{id}", Name = "GetCourseAssignById")]
        public async Task<IActionResult> GetCourseAssignById(string id)
        {
            var CourseAssignModel = await _ICourseAssignService.GetCourseAssignById(id);
            if (CourseAssignModel == null)
                return NotFound();
            return Ok(CourseAssignModel);
        }

        [HttpGet]
        public IActionResult GetAllCourseAssign([FromQuery] CourseAssignViewModel flitter, CourseAssignSortBy sortBy, OrderBy order, int pageIndex = 1, int pageSize = 10)
        {
            var listCourseAssignModel = _ICourseAssignService.GetAllCourseAssign(flitter, pageIndex, pageSize, sortBy, order);
            return Ok(listCourseAssignModel);
        }

        [HttpPost]
        public async Task<IActionResult> CreateCourseAssign([FromBody] CreateCourseAssignRequest request)
        {
            var CourseAssignVM = await _ICourseAssignService.CreateCourseAssign(request);
            if (CourseAssignVM == null)
            {
                return BadRequest();
            }
            else
            {
                return CreatedAtRoute(nameof(GetCourseAssignById), new { id = CourseAssignVM.Id }, CourseAssignVM);
            }
        }

        [HttpPost("AddListCourseAssign/{ScheduleID}", Name = "AddListCourseAssignInSemester")]
        public async Task<IActionResult> CreateListCourseAssign(string ScheduleID, [FromBody] List<CreateCourseAssignRequest> requests)
        {
            var checkCourseAssignVM = await _ICourseAssignService.CreateListCourseAssign(ScheduleID,requests);
            if (checkCourseAssignVM == false)
            {
                return BadRequest();
            }
            else
            {
                return Ok();
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCourseAssign(string id, [FromBody] UpdateCourseAssignRequest request)
        {
            var CourseAssignVM = await _ICourseAssignService.UpdateCourseAssign(id, request);
            if (CourseAssignVM == null)
                return BadRequest();
            return Ok(CourseAssignVM);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourseAssign(string id)
        {
            var rs = await _ICourseAssignService.DeleteCourseAssign(id);
            if (rs == false)
                return NotFound();
            return Ok();
        }


        [HttpDelete("DeleteListCourseAssign/{ScheduleID}")]
        public async Task<IActionResult> DeleteListCourseAssignInSemester(string ScheduleID)
        {
            var rs = await _ICourseAssignService.DeleteListCourseAssignInSemester(ScheduleID);
            if (rs == false)
                return NotFound();
            return Ok();
        }
    }
}
