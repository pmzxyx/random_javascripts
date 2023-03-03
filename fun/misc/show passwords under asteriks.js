javascript:(function(){var%20s,F,j,f,i;%20s%20=%20%22%22;%20F%20=%20document.forms;%20for(j=0;%20j<F.length;%20++j)%20{%20f%20=%20F[j];%20for%20(i=0;%20i<f.length;%20++i)%20{%20if%20(f[i].type.toLowerCase()%20==%20%22password%22)%20s%20+=%20f[i].value%20+%20%22n%22;%20}%20}%20if%20(s)%20alert(%22Passwords%20in%20forms%20on%20this%20page:nn%22%20+%20s);%20else%20alert(%22There%20are%20no%20passwords%20in%20forms%20on%20this%20page.%22);})();

// for if you want to look at your password but you cant see it.
