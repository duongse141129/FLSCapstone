using Reso.Core.Attributes;
using System.Collections.Generic;

namespace BEAPICapstoneProjectFLS.ViewModel
{
    public class DepartmentGroupViewModel
    {
        public string Id { get; set; }
        public string DepartmentGroupName { get; set; }
        public int? Status { get; set; }

        [Contain]
        public List<string> DepartmentIds { get; set; }
    }
}
