using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace testtut.DTOs
{
    public class LoginDto
    {
       // [Required]
        public string Username { get; set; }
        //[Required]
        public string Password { get; set; }
    }
}
