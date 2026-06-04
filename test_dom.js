const http = require('http');

http.get('http://localhost:3001', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('=== HERO SECTION VERIFICATION ===');
    
    // Check video element
    console.log('\n✓ Video Element:', data.includes('<video') && data.includes('cloud.mp4') ? 'FOUND' : 'MISSING');
    
    // Check ELOMA text
    console.log('✓ ELOMA Text:', data.includes('<h1') && data.includes('>ELOMA<') ? 'FOUND' : 'MISSING');
    
    // Check tagline
    console.log('✓ Tagline:', data.includes('Powering Businesses') ? 'FOUND' : 'MISSING');
    
    // Check globe image
    console.log('✓ Globe Image:', data.includes('globe.webp') ? 'FOUND' : 'MISSING');
    
    // Check SVG timeline line
    console.log('✓ Timeline Line (SVG):', data.includes('stroke-dasharray') && data.includes('stroke-dashoffset') ? 'FOUND' : 'MISSING');
    
    // Check timeline circles
    console.log('✓ Timeline Circles:', data.includes('cx=') ? 'FOUND' : 'MISSING');
    
    // Check business division circles
    console.log('✓ Business Circles:', data.includes('data-circle') ? 'FOUND' : 'MISSING');
    
    // Check background image overlay
    console.log('✓ Image Overlay:', data.includes('transport-logistics.jpg') ? 'FOUND' : 'MISSING');
    
    console.log('\n=== ALL ELEMENTS DETECTED ===');
  });
});
