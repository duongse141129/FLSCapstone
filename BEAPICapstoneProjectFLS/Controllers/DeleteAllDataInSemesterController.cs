using BEAPICapstoneProjectFLS.IServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BEAPICapstoneProjectFLS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeleteAllDataInSemesterController : ControllerBase
    {
        private readonly IDeleteAllDataInSemesterService _IDeleteAllDataInSemesterService;
        private readonly ISemesterService _ISemesterService;

        public DeleteAllDataInSemesterController(IDeleteAllDataInSemesterService DeleteAllDataInSemesterService, ISemesterService SemesterService)
        {
            _IDeleteAllDataInSemesterService = DeleteAllDataInSemesterService;
            _ISemesterService = SemesterService;
        }

        [HttpDelete("DeleteAllDataInSemester/{semesterID}", Name = "DeleteAllDataInSemester")]
        public async Task<IActionResult> DeleteAllDataInSemester(string semesterID)
        {
                var apiResponse = await _IDeleteAllDataInSemesterService.DeleteAllDataInSemester(semesterID);
                if (apiResponse.Success == false)
                {
                    return BadRequest(apiResponse);
                }
                else
                {
                    return Ok(apiResponse);
                }


        }

        [HttpDelete("DeleteAllDataInSemesterExceptSemester/{semesterID}", Name = "DeleteAllDataInSemesterExceptSemester")]
        public async Task<IActionResult> DeleteAllDataInSemesterExceptSemester(string semesterID)
        {
            var apiResponse = await _IDeleteAllDataInSemesterService.DeleteAllDataInSemester(semesterID);
            if (apiResponse.Success == false)
            {
                return BadRequest(apiResponse);
            }
            else
            {
                return Ok(apiResponse);
            }


        }


        [HttpGet("GetALlSemester", Name = "GetALlSemester")]
        public async Task<IActionResult> GetALlSemester()
        {
            var semesters = await _IDeleteAllDataInSemesterService.getAllSemester();
            if (semesters != null)
            {
                return Ok(semesters);
            }
            return NotFound();



        }
    }
}
