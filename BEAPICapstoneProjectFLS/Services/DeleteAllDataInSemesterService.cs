using AutoMapper;
using BEAPICapstoneProjectFLS.Entities;
using BEAPICapstoneProjectFLS.Enum;
using BEAPICapstoneProjectFLS.IRepositories;
using BEAPICapstoneProjectFLS.IServices;
using BEAPICapstoneProjectFLS.ViewModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BEAPICapstoneProjectFLS.Services
{
    public class DeleteAllDataInSemesterService : IDeleteAllDataInSemesterService
    {
        private readonly IGenericRepository<CourseGroupItem> _resCourseGroupItem;
        private readonly IGenericRepository<LecturerCourseGroup> _resLecturerCourseGroup;
        private readonly IGenericRepository<CourseAssign> _resCourseAssign;
        private readonly IGenericRepository<LecturerSlotConfig> _resLecturerSlotConfig;
        private readonly IGenericRepository<SlotType> _resSlotType;
        private readonly IGenericRepository<Schedule> _resSchedule;
        private readonly IGenericRepository<SubjectOfLecturer> _resSubjectOfLecturer;
        private readonly IGenericRepository<Course> _resCourse;
        private readonly IGenericRepository<Request> _resRequest;
        private readonly IGenericRepository<Semester> _resSemester;
        private readonly IGenericRepository<RoomSemester> _resRoomSemester;
        private readonly IMapper _mapper;


        public DeleteAllDataInSemesterService(
                    IGenericRepository<CourseGroupItem> courseGroupItemRepository,
                    IGenericRepository<LecturerCourseGroup> lecturerCourseGroupRepository,
                    IGenericRepository<CourseAssign> courseAssignRepository,
                    IGenericRepository<LecturerSlotConfig> lecturerSlotConfigRepository,
                    IGenericRepository<SlotType> slotTypeRepository,
                    IGenericRepository<Schedule> scheduleRepository,
                    IGenericRepository<SubjectOfLecturer> subjectOfLecturerRepository, 
                    IGenericRepository<Course> courseRepository,
                    IGenericRepository<Request> requestRepository,
                    IGenericRepository<Semester> semesterRepository,
                    IGenericRepository<RoomSemester> roomSemesterRepository,
                    IMapper mapper)
        {
            _resCourseGroupItem = courseGroupItemRepository;
            _resLecturerCourseGroup = lecturerCourseGroupRepository;
            _resCourseAssign = courseAssignRepository;
            _resLecturerSlotConfig = lecturerSlotConfigRepository;
            _resSlotType = slotTypeRepository;
            _resSchedule = scheduleRepository;
            _resSubjectOfLecturer = subjectOfLecturerRepository;
            _resCourse = courseRepository;
            _resRequest = requestRepository;
            _resSemester = semesterRepository;
            _resRoomSemester = roomSemesterRepository;
            _mapper = mapper;
        }

        public async Task<ApiResponse> DeleteAllCourseAssignInSemester(string scheduleID)
        {
            ApiResponse apiResponse = new ApiResponse();
            apiResponse.Success = false;
            try
            {
                var listCourseAssign = await _resCourseAssign.GetAllByIQueryable()
                    .Where(x => x.ScheduleId == scheduleID)
                    .ToListAsync();
                if (listCourseAssign.Count <= 0)
                {
                    apiResponse.Success = true;
                    return apiResponse;
                }
                else
                {
                    foreach (var CourseAssign in listCourseAssign)
                    {
                        await _resCourseAssign.DeleteAsync(CourseAssign.Id);
                    }
                    apiResponse.Success = true;
                    return apiResponse;
                }

            }
            catch (Exception ex)
            {
                apiResponse.Message = ex.Message;
                return apiResponse;
            }
        }

        public async Task<ApiResponse> DeleteAllCourseGroupItemAndLecturerCourseGroupInSemester(string semesterID)
        {
            ApiResponse apiResponse = new ApiResponse();
            apiResponse.Success = false;
            try
            {
                var listlecturerCourseGroup = await _resLecturerCourseGroup.GetAllByIQueryable()
                    .Where(x => x.SemesterId == semesterID)
                    .Include(x => x.CourseGroupItems)
                    .ToListAsync();

                foreach (var item in listlecturerCourseGroup)
                {
                    foreach (var courseGroupItem in item.CourseGroupItems)
                    {
                        await _resCourseGroupItem.DeleteAsync(courseGroupItem.Id);
                    }
                }

                foreach(var lecCourseGroup in listlecturerCourseGroup)
                {
                    await _resLecturerCourseGroup.DeleteAsync(lecCourseGroup.Id);
                }

                apiResponse.Success = true;
                return apiResponse;

            }
            catch(Exception ex)
            {
                apiResponse.Success = false;
                apiResponse.Data = ex.Message;
                return apiResponse;
            }
        }

        public async Task<ApiResponse> DeleteAllCourseInSemester(string semesterID)
        {
            ApiResponse apiResponse = new ApiResponse();
            apiResponse.Success = false;
            try
            {
                var listCourse = await _resCourse.GetAllByIQueryable()
                    .Where(x => x.SemesterId == semesterID)
                    .ToListAsync();
                if (listCourse.Count == 0)
                {
                    apiResponse.Success = true;
                    return apiResponse;
                }

                foreach (var crs in listCourse)
                {
                    await _resCourse.DeleteAsync(crs.Id);
                }
                apiResponse.Success = true;
                return apiResponse;
            }
            catch (Exception ex)
            {
                apiResponse.Message = ex.Message;
                return apiResponse;
            }
        }

        public async Task<ApiResponse> DeleteAllLecturerSlotConfigInSemester(string semesterID)
        {
            ApiResponse apiResponse = new ApiResponse();
            apiResponse.Success = false;
            try
            {
                var listDto= await _resLecturerSlotConfig.GetAllByIQueryable()
                    .Where(x => x.SemesterId == semesterID)
                    .ToListAsync();
                if (listDto.Count == 0)
                {
                    apiResponse.Success = true;
                    return apiResponse;
                }

                foreach (var dto in listDto)
                {
                    await _resLecturerSlotConfig.DeleteAsync(dto.Id);
                }
                apiResponse.Success = true;
                return apiResponse;
            }
            catch (Exception ex)
            {
                apiResponse.Message = ex.Message;
                return apiResponse;
            }
        }

        public async Task<ApiResponse> DeleteAllSlotTypeInSemester(string semesterID)
        {
            ApiResponse apiResponse = new ApiResponse();
            apiResponse.Success = false;
            try
            {
                var listDto = await _resSlotType.GetAllByIQueryable()
                    .Where(x => x.SemesterId == semesterID)
                    .ToListAsync();
                if (listDto.Count == 0)
                {
                    apiResponse.Success = true;
                    return apiResponse;
                }

                foreach (var dto in listDto)
                {
                    await _resSlotType.DeleteAsync(dto.Id);
                }
                apiResponse.Success = true;
                return apiResponse;
            }
            catch (Exception ex)
            {
                apiResponse.Message = ex.Message;
                return apiResponse;
            }
        }

        public async Task<ApiResponse> DeleteAllSubjectOfLecturerInSemester(string semesterID)
        {
            ApiResponse apiResponse = new ApiResponse();
            apiResponse.Success = false;
            try
            {
                var listDto = await _resSubjectOfLecturer.GetAllByIQueryable()
                    .Where(x => x.SemesterId == semesterID)
                    .ToListAsync();
                if (listDto.Count == 0)
                {
                    apiResponse.Success = true;
                    return apiResponse;
                }

                foreach (var dto in listDto)
                {
                    await _resSubjectOfLecturer.DeleteAsync(dto.Id);
                }
                apiResponse.Success = true;
                return apiResponse;
            }
            catch (Exception ex)
            {
                apiResponse.Message = ex.Message;
                return apiResponse;
            }
        }

        public async Task<ApiResponse> DeleteAllRequestInSemester(string semesterID)
        {
            ApiResponse apiResponse = new ApiResponse();
            apiResponse.Success = false;
            try
            {
                var listDto = await _resRequest.GetAllByIQueryable()
                    .Where(x => x.SemesterId == semesterID)
                    .ToListAsync();
                if (listDto.Count == 0)
                {
                    apiResponse.Success = true;
                    return apiResponse;
                }

                foreach (var dto in listDto)
                {
                    await _resRequest.DeleteAsync(dto.Id);
                }
                apiResponse.Success = true;
                return apiResponse;
            }
            catch (Exception ex)
            {
                apiResponse.Message = ex.Message;
                return apiResponse;
            }
        }


        public async Task<ApiResponse> DeleteAllDataInSemester(string semesterID)
        {
            ApiResponse apiResponse = new ApiResponse();
            apiResponse.Success = false;
            apiResponse.Message = "Delete All Data In Semester fail ";
            apiResponse.Data = "";
            try
            {
                var semester = await _resSemester.GetAllByIQueryable()
                                    .Where(x => x.Id == semesterID)
                                    .FirstOrDefaultAsync();
                if (semester == null)
                {
                    apiResponse.Data += "Not Found semesterID ";
                    return apiResponse;
                }


                var schedule = await _resSchedule.GetAllByIQueryable()
                                    .Where(x => x.SemesterId == semesterID)
                                    .FirstOrDefaultAsync();
                string scheduleID;
                if (schedule != null)
                {
                    scheduleID = schedule.Id;
                    var rsCourseAssign = await DeleteAllCourseAssignInSemester(scheduleID);
                    if (rsCourseAssign.Success == false)
                    {
                        apiResponse.Data += "Error at Course Assign: " + rsCourseAssign.Data;
                        return apiResponse;
                    }

                    
                }

                var rsCourseGroupItem = await DeleteAllCourseGroupItemAndLecturerCourseGroupInSemester(semesterID);
                if (rsCourseGroupItem.Success == false)
                {
                    apiResponse.Data += "Error at CourseGroupItem & LecturerCourseGroup: " + rsCourseGroupItem.Data;
                    return apiResponse;
                }
               
                var rsCourse = await DeleteAllCourseInSemester(semesterID);
                if (rsCourse.Success == false)
                {
                    apiResponse.Data += "Error at Course: " + rsCourse.Data;
                    return apiResponse;
                }

                var rsLecturerSlotConfig = await DeleteAllLecturerSlotConfigInSemester(semesterID);
                if (rsLecturerSlotConfig.Success == false)
                {
                    apiResponse.Data += "Error at LecturerSlotConfig: " + rsLecturerSlotConfig.Data;
                    return apiResponse;
                }

                var rsSlotType = await DeleteAllSlotTypeInSemester(semesterID);
                if (rsSlotType.Success == false)
                {
                    apiResponse.Data += "Error at SlotType: " + rsSlotType.Data;
                    return apiResponse;
                }

                var rsSubjectOfLecturer = await DeleteAllSubjectOfLecturerInSemester(semesterID);
                if (rsSubjectOfLecturer.Success == false)
                {
                    apiResponse.Data += "Error at SubjectOfLecturer: " + rsSubjectOfLecturer.Data;
                    return apiResponse;
                }

                var rsRequest = await DeleteAllRequestInSemester(semesterID);
                if (rsRequest.Success == false)
                {
                    apiResponse.Data += "Error at Request: " + rsRequest.Data;
                    return apiResponse;
                }
                if (schedule != null)
                {
                    await _resSchedule.DeleteAsync(schedule.Id);
                }
                var roomSemester = await _resRoomSemester.GetAllByIQueryable()
                                    .Where(x => x.SemesterId == semesterID)
                                    .FirstOrDefaultAsync();
                await _resRoomSemester.DeleteAsync(roomSemester.Id);


                await _resSemester.DeleteAsync(semesterID);

                apiResponse.Success = true;
                apiResponse.Message = "Delete All Data In Semester Success ";

                return apiResponse;
            }
            catch(Exception ex)
            {
                apiResponse.Data += ex.Message;
                return apiResponse;
            }
        }


        public async Task<ApiResponse> DeleteAllDataInSemesterExceptSemester(string semesterID)
        {
            ApiResponse apiResponse = new ApiResponse();
            apiResponse.Success = false;
            apiResponse.Message = "Delete All Data In Semester Except Semester fail ";
            apiResponse.Data = "";
            try
            {
                var semester = await _resSemester.GetAllByIQueryable()
                                    .Where(x => x.Id == semesterID)
                                    .FirstOrDefaultAsync();
                if (semester == null)
                {
                    apiResponse.Data += "Not Found semesterID ";
                    return apiResponse;
                }


                var schedule = await _resSchedule.GetAllByIQueryable()
                                    .Where(x => x.SemesterId == semesterID)
                                    .FirstOrDefaultAsync();
                string scheduleID;
                if (schedule != null)
                {
                    scheduleID = schedule.Id;
                    var rsCourseAssign = await DeleteAllCourseAssignInSemester(scheduleID);
                    if (rsCourseAssign.Success == false)
                    {
                        apiResponse.Data += "Error at Course Assign: " + rsCourseAssign.Data;
                        return apiResponse;
                    }


                }

                var rsCourseGroupItem = await DeleteAllCourseGroupItemAndLecturerCourseGroupInSemester(semesterID);
                if (rsCourseGroupItem.Success == false)
                {
                    apiResponse.Data += "Error at CourseGroupItem & LecturerCourseGroup: " + rsCourseGroupItem.Data;
                    return apiResponse;
                }

                var rsCourse = await DeleteAllCourseInSemester(semesterID);
                if (rsCourse.Success == false)
                {
                    apiResponse.Data += "Error at Course: " + rsCourse.Data;
                    return apiResponse;
                }

                var rsLecturerSlotConfig = await DeleteAllLecturerSlotConfigInSemester(semesterID);
                if (rsLecturerSlotConfig.Success == false)
                {
                    apiResponse.Data += "Error at LecturerSlotConfig: " + rsLecturerSlotConfig.Data;
                    return apiResponse;
                }

                var rsSlotType = await DeleteAllSlotTypeInSemester(semesterID);
                if (rsSlotType.Success == false)
                {
                    apiResponse.Data += "Error at SlotType: " + rsSlotType.Data;
                    return apiResponse;
                }

                var rsSubjectOfLecturer = await DeleteAllSubjectOfLecturerInSemester(semesterID);
                if (rsSubjectOfLecturer.Success == false)
                {
                    apiResponse.Data += "Error at SubjectOfLecturer: " + rsSubjectOfLecturer.Data;
                    return apiResponse;
                }

                var rsRequest = await DeleteAllRequestInSemester(semesterID);
                if (rsRequest.Success == false)
                {
                    apiResponse.Data += "Error at Request: " + rsRequest.Data;
                    return apiResponse;
                }
                if (schedule != null)
                {
                    await _resSchedule.DeleteAsync(schedule.Id);
                }
                var roomSemester = await _resRoomSemester.GetAllByIQueryable()
                                    .Where(x => x.SemesterId == semesterID)
                                    .FirstOrDefaultAsync();
                await _resRoomSemester.DeleteAsync(roomSemester.Id);



                apiResponse.Success = true;
                apiResponse.Message = "Delete All Data In Semester Except Semester Success ";

                return apiResponse;
            }
            catch (Exception ex)
            {
                apiResponse.Data += ex.Message;
                return apiResponse;
            }
        }

        public async Task<List<Semester>> getAllSemester()
        {
            var listSemester = await _resSemester.GetAllByIQueryable()
                                  .ToListAsync();
            return listSemester;
        }


    }
}
