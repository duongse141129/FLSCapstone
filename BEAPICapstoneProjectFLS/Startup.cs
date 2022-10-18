using BEAPICapstoneProjectFLS.AutoMapper;
using BEAPICapstoneProjectFLS.Entities;
using BEAPICapstoneProjectFLS.IRepositories;
using BEAPICapstoneProjectFLS.IServices;
using BEAPICapstoneProjectFLS.Repositories;
using BEAPICapstoneProjectFLS.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BEAPICapstoneProjectFLS
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();

            services.AddDbContext<FLSCapstoneDatabaseContext>(option =>
            {
                option.UseSqlServer(Configuration.GetConnectionString("MyDB"));
            });
            services.AddAutoMapper(typeof(DepartmentGroupMapper).Assembly);
            services.AddAutoMapper(typeof(DepartmentMapper).Assembly);
            services.AddAutoMapper(typeof(LecturerMapper).Assembly);
            services.AddAutoMapper(typeof(DepartmentManagerMapper).Assembly);
            services.AddAutoMapper(typeof(AdminMapper).Assembly);
            services.AddAutoMapper(typeof(SubjectMapper).Assembly);
            services.AddAutoMapper(typeof(SlotTypeMapper).Assembly);
            services.AddAutoMapper(typeof(SemesterMapper).Assembly);
            services.AddAutoMapper(typeof(RoomSemesterMapper).Assembly);
            services.AddAutoMapper(typeof(RoomTypeMapper).Assembly);
            services.AddAutoMapper(typeof(CourseMapper).Assembly);
            services.AddAutoMapper(typeof(LecturerCourseGroupMapper).Assembly);
            services.AddAutoMapper(typeof(RequestMapper).Assembly);
            services.AddAutoMapper(typeof(SubjectOfLecturerMapper).Assembly);
            services.AddAutoMapper(typeof(CourseAssignMapper).Assembly);
            services.AddAutoMapper(typeof(LecturerSlotConfigMapper).Assembly);
            services.AddAutoMapper(typeof(CourseGroupItemMapper).Assembly);



            services.AddScoped<IDepartmentGroupService, DepartmentGroupService>();
            services.AddScoped<IDepartmentService, DepartmentService>();
            services.AddScoped<ILecturerService, LecturerService>();
            services.AddScoped<IDepartmentManagerService, DepartmentManagerService>();
            services.AddScoped<IAdminService, AdminService>();
            services.AddScoped<ISubjectService, SubjectService>();
            services.AddScoped<ISlotTypeService, SlotTypeService>();
            services.AddScoped<ISemesterService, SemesterService>();
            services.AddScoped<IRoomSemesterService, RoomSemesterService>();
            services.AddScoped<IRoomTypeService, RoomTypeService>();
            services.AddScoped<ICourseService, CourseService>();
            services.AddScoped<ILecturerCourseGroupService, LecturerCourseGroupService>();
            services.AddScoped<ISemesterService, SemesterService>();
            services.AddScoped<IRequestService, RequestService>();
            services.AddScoped<ISubjectOfLecturerService, SubjectOfLecturerService>();
            services.AddScoped<ICourseAssignService, CourseAssignService>();
            services.AddScoped<ILecturerSlotConfigService, LecturerSlotConfigService>();
            services.AddScoped<ICourseGroupItemService, CourseGroupItemService>();


            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "BEAPICapstoneProjectFLS", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "BEAPICapstoneProjectFLS v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
