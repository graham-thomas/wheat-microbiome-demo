'use strict';
let climateData=null;
const CLIMATE_COLOR='#804b99';
function climateValue(site,date,key){
 const monthDay=new Date(date).toISOString().slice(5,10);
 const row=climateData?.daily.find(r=>r.site_id===site&&r.month_day===monthDay);
 const value=key==='rain_mm'?row?.rain_mm_per_day:row?.temperature_c;
 return Number.isFinite(value)?value:null;
}
function climateWindow(visit,days){return climateData?.windows.find(w=>w.visit_id===visit.visit_id&&w.days===days)||null;}
function signed(value,unit){return `${value>0?'+':value<0?'−':''}${Math.abs(value).toFixed(1)} ${unit}`;}
function climateSummary(visit,window){
 const ref=climateWindow(visit,window.days);
 if(!ref)return '<span class="climate-summary warning">Historical reference unavailable.</span>';
 if(!window.complete)return '<span class="climate-summary">Historical reference available; incomplete observations prevent comparison.</span>';
 if(!Number.isFinite(ref.rain_difference_mm)||!Number.isFinite(ref.temperature_difference_c))return '<span class="climate-summary warning">Historical comparison unavailable.</span>';
 const pct=Number.isFinite(ref.rain_percent_reference)?` · ${Math.round(ref.rain_percent_reference)}% of reference`:'';
 return `<span class="climate-summary" title="Comparison with equivalent 7-/28-day historical windows across 30 years. Reference: ${ref.rain_mm.toFixed(1)} mm and ${ref.temperature_c.toFixed(1)} °C. Same HadUK-Grid release and 1 km grid; not a significance test.">${window.days}d vs 1991–2020: <b>${signed(ref.rain_difference_mm,'mm')}${pct}</b> · <b>${signed(ref.temperature_difference_c,'°C')}</b></span>`;
}
function climateLegend(){return '<span class="climate-legend"><i></i>1991–2020 daily climate reference</span>';}
function climateMethods(){return `<p><strong>Historical reference: 1991–2020.</strong> Purple dashed lines show calendar-day averages from daily HadUK-Grid v1.3.2.ceda, using the same 1 km site grid cells and aligned 09–09 UTC observation periods as the sampled weather. Rainfall includes dry days; temperature is the aligned daily minimum/maximum midpoint, not an hourly mean.</p><p>Daily references require 30 valid years. Missing reference dates appear as gaps, including 31 December temperature (29 years). Rainfall averages are not forecasts of rain on an individual day. No smoothing is applied.</p><p>Window comparisons use equivalent calendar-date windows in each of 30 baseline sampling years, calculated independently of the daily curve. Windows crossing New Year can include December 1990; this differs from averaging daily calendar-date references strictly within 1991–2020. All 66 window references contain 30 complete years. Differences describe weather relative to the baseline, not significance tests or evidence of climate change. The 2020 observations overlap the baseline.</p><p><a href="https://doi.org/10.5285/789b3065d74a4c948ab05d33556c86d0">HadUK-Grid source</a> · <a href="data/climate-manifest.json">Reference provenance</a>. Contains Met Office data licensed under the Open Government Licence v3.0.</p>`;}
