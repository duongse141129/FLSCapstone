using Reso.Core.Attributes;
using System.Collections.Generic;

namespace BEAPICapstoneProjectFLS.ViewModel
{
    public class DepartmentViewModel
    {
        public string Id { get; set; }
        public string DepartmentName { get; set; }
        public string DepartmentGroupId { get; set; }
        public string DepartmentGroupName { get; set; }
        public int? Status { get; set; }

        
    }
}
