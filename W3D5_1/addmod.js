exports.add = function (req, res, vals)
{
         
         var opererators = "";
         var result = 0;
         oper = vals.operators
               
         if(oper === '+')
         {
            result = parseInt(vals.n1) + parseInt(vals.n2);
         }
         if(oper === '-')
         {
            result = parseInt(vals.n1) + parseInt(vals.n2);
         }
         if(oper === 'x')
         {
            result = parseInt(vals.n1) + parseInt(vals.n2);
         }
         if(oper === '/')
         {
            result = parseInt(vals.n1) + parseInt(vals.n2);s
         }
        
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Simple calculator</title>");
    res.write("</head>");
    res.write("<body>");   
    res.write(String(result));
    res.write("</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
    };
