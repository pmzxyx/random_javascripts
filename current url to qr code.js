javascript: (function() %7B var url %3D (%27http://chart.apis.google.com/chart%3Fcht%3Dqr%26chs%3D300x300%26chl%3D%27 %2B encodeURIComponent(location.href))%3B w %3D open(url, %27w%27, %27location%3Dno,status%3Dyes,menubar%3Dno,scrollbars%3Dno,resizable%3Dyes,width%3D500,height%3D500,modal%3Dyes,dependent%3Dyes%27)%3B if (w) %7B setTimeout(%27w.focus()%27, 1000) %7D else %7B location %3D url %7D %7D)()%3B
             
             //opens a new window with a QR code.
