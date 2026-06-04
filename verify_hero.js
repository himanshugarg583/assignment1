const http = require('http');

http.get('http://localhost:3001', (res) => {
  let html = '';
  res.on('data', chunk => { html += chunk; });
  res.on('end', () => {
    console.log('═══════════════════════════════════════════════');
    console.log('  HERO SECTION VERIFICATION REPORT');
    console.log('═══════════════════════════════════════════════\n');

    const checks = [
      { name: '1. Cloud.mp4 Video Background', test: () => html.includes('<video') && html.includes('cloud.mp4') },
      { name: '2. ELOMA Hero Text', test: () => html.includes('>ELOMA<') },
      { name: '3. Tagline Text', test: () => html.includes('Powering Businesses') && html.includes('Building the Future') },
      { name: '4. Globe Image', test: () => html.includes('globe.webp') },
      { name: '5. Timeline Line (SVG)', test: () => html.includes('stroke-dasharray') && html.includes('stroke-dashoffset') },
      { name: '6. Timeline Circles', test: () => (html.match(/cx="50"/g) || []).length >= 4 },
      { name: '7. Business Circles', test: () => html.includes('data-circle') },
      { name: '8. Image Transitions', test: () => html.includes('transport-logistics.jpg') && html.includes('digital-security.jpg') },
      { name: '9. Scroll Animations', test: () => html.includes("'use client'") }
    ];

    let pass = 0;
    checks.forEach(c => {
      const ok = c.test();
      console.log((ok ? '✅' : '❌') + '  ' + c.name);
      if (ok) pass++;
    });

    console.log('\n═══════════════════════════════════════════════');
    console.log('  VERDICT: ' + pass + '/' + checks.length + ' PASS');
    console.log('═══════════════════════════════════════════════\n');
  });
});
