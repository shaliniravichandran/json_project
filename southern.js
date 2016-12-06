var fs=require('fs');
var data = fs.readFileSync('Agriculture.csv', {encoding:'utf8'}).toString();
var lines=data.split("\r\n");
var j=0;
var sum=[],sum1=[],sum2=[],sum3=[];
var str="";
var temp={};
var result=[];
var years=["yr2003","yr2004","yr2005","yr2006","yr2007","yr2008","yr2009","yr2010","yr2011","yr2012","yr2013","yr2014"];
j=0;
for(var i=0;i<lines.length-1;i++)
{
 var line=lines[i].split(",");
 
 if(line[0].includes("Agricultural Production Foodgrains Rice Yield Karnataka"))
{
     for(var k=14;k<=24;k++)
    {
        if(line[k]=='NA')
    {
        line[k]=0;
    }


sum.push(parseFloat(line[k]));

        
    }    
    console.log("Sum:"+sum);
}
if(line[0].includes("Agricultural Production Foodgrains Rice Yield Kerala"))
{
    for(var p=14;p<=24;p++)
    {
        if(line[p]=='NA')
        {
            line[p]=0;
        }
        sum1.push(parseFloat(line[p]));

        
}    
console.log("Sum1:"+sum1);
}
 if(line[0].includes("Agricultural Production Foodgrains Rice Yield Andhra Pradesh"))
 {
    for(var q=14;q<=24;q++)
    {
    if(line[q]=='NA')
        {
            line[q]=0;
        }
sum2.push(parseFloat(line[q]));

    
    }    
    console.log("Sum2:"+sum2);
 }
if(line[0].includes("Agricultural Production Foodgrains Rice Yield Tamil Nadu"))
{
     for(var e=14;e<=24;e++)
    {
        if(line[e]=='NA')
    {
            line[e]=0;
    }
        sum3.push(parseFloat(line[e]));

        
    }    
    console.log("Sum3:"+sum3);
}

var value=[sum,sum1,sum2,sum3];
var str=["Agricultural Production Foodgrains Volume Karnataka","Agricultural Production Foodgrains Rice Volume Kerala","Agricultural Production Foodgrains Rice Volume Andhra Pradesh","Agricultural Production Foodgrains Rice Volume Tamil Nadu"];
}
for(var v=0;v<4;v++)
{
    temp["Southernstate"]=str[v];
    for(b=0;b<12;b++)
    {
        temp[years[b]]=value[v][b];
    }
    
result.push(temp);
temp={};
}




fs.writeFileSync("southernstate.json",JSON.stringify(result),encoding="utf8");