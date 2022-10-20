using BEAPICapstoneProjectFLS.IServices;
using BEAPICapstoneProjectFLS.Requests;
using BEAPICapstoneProjectFLS.Requests.CourseRequest;
using BEAPICapstoneProjectFLS.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BEAPICapstoneProjectFLS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ICourseService _ICourseService;

        public CourseController(ICourseService CourseService)
        {
            _ICourseService = CourseService;
        }

        [HttpGet("{id}", Name = "GetCourseById")]
        public async Task<IActionResult> GetCourseById(string id)
        {
            var CourseModel = await _ICourseService.GetCourseById(id);
            if (CourseModel == null)
                return NotFound();
            return Ok(CourseModel);
        }

        [HttpGet]
        public IActionResult GetAllCourse([FromQuery] CourseViewModel flitter, CourseSortBy sortBy, OrderBy order, int pageIndex = 1, int pageSize = 10)
        {
            var listCourseModel = _ICourseService.GetAllCourse(flitter, pageIndex, pageSize, sortBy, order);
            return Ok(listCourseModel);
        }

        [HttpPost]
        public async Task<IActionResult> CreateCourse([FromBody] CreateCourseRequest request)
        {
            var CourseVM = await _ICourseService.CreateCourse(request);
            if (CourseVM == null)
            {
                return BadRequest();
            }
            else
            {
                return CreatedAtRoute(nameof(GetCourseById), new { id = CourseVM.Id }, CourseVM);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCourse(string id, [FromBody] UpdateCourseRequest request)
        {
            var CourseVM = await _ICourseService.UpdateCourse(id, request);
            if (CourseVM == null)
                return BadRequest();
            return Ok(CourseVM);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourse(string id)
        {
            var rs = await _ICourseService.DeleteCourse(id);
            if (rs == false)
                return NotFound();
            return Ok();
        }
    }
}
