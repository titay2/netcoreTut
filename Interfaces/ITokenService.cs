using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using testtut.Entities;

namespace testtut.Interfaces
{
    public interface ITokenService

    {
        string CreateToken(AppUser user);
    }
}
