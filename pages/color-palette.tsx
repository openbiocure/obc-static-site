import Head from 'next/head'
import Link from 'next/link'

export default function ColorPalette() {
  const colorGroups = [
    {
      title: 'Primary Colors',
      colors: [
        { name: 'primary-100', value: '#0F2A44', description: 'Dark Blue' },
        { name: 'primary-80', value: '#13416D' },
        { name: 'primary-60', value: '#246AAD' },
        { name: 'primary-40', value: '#0972D7', description: 'Main Primary' },
        { name: 'primary-20', value: '#B4D8FA' },
        { name: 'primary-10', value: '#EFF6FF', description: 'Lightest' },
      ]
    },
    {
      title: 'Secondary Colors',
      colors: [
        { name: 'secondary-100', value: '#2FA4A9', description: 'Teal' },
        { name: 'secondary-80', value: '#41D0D6' },
        { name: 'secondary-60', value: '#5BECF3' },
        { name: 'secondary-40', value: '#7DF9FF' },
        { name: 'secondary-20', value: '#A3FBFF' },
        { name: 'secondary-10', value: '#E9FEFF', description: 'Lightest' },
      ]
    },
    {
      title: 'Alert & Status Colors',
      colors: [
        { name: 'alert-success', value: '#12D18E', description: 'Green' },
        { name: 'alert-warning', value: '#FFC832', description: 'Yellow' },
        { name: 'alert-error', value: '#F54141', description: 'Red' },
      ]
    },
    {
      title: 'Greyscale',
      colors: [
        { name: 'gray-900', value: '#212121', description: 'Darkest' },
        { name: 'gray-800', value: '#424242' },
        { name: 'gray-700', value: '#616161' },
        { name: 'gray-600', value: '#757575' },
        { name: 'gray-500', value: '#9E9E9E' },
        { name: 'gray-400', value: '#BDBDBD' },
        { name: 'gray-300', value: '#E0E0E0' },
        { name: 'gray-200', value: '#EEEEEE' },
        { name: 'gray-100', value: '#F5F5F5' },
        { name: 'gray-0', value: '#FFFFFF', description: 'White' },
      ]
    },
    {
      title: 'Original OBC Colors (Legacy)',
      colors: [
        { name: 'obc-blue', value: '#00239C' },
        { name: 'obc-dark-blue', value: '#001E62' },
        { name: 'obc-orange', value: '#E76900' },
        { name: 'obc-cyan', value: '#00A3E0' },
        { name: 'obc-bg', value: 'rgb(249, 250, 251)' },
      ]
    },
    {
      title: 'Border Colors',
      colors: [
        { name: 'border-default', value: '#E1E4EA' },
        { name: 'border-light', value: '#E1EBF4' },
      ]
    },
    {
      title: 'Background Colors',
      colors: [
        { name: 'background-light', value: '#F2F5F8' },
        { name: 'background-white', value: '#FFFFFF' },
      ]
    },
  ]

  return (
    <>
      <Head>
        <title>Color Palette - OpenBioCure</title>
        <meta name="description" content="OpenBioCure Design System Color Palette" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="text-obc-blue hover:text-obc-orange mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-obc-dark-blue mb-2">Color Palette</h1>
            <p className="text-gray-600">Design system color reference</p>
          </div>

          <div className="space-y-12">
            {colorGroups.map((group) => (
              <div key={group.title} className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-obc-dark-blue mb-6">{group.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {group.colors.map((color) => {
                    const bgClass = color.name.includes('gray-0') 
                      ? 'bg-white border-2 border-gray-300' 
                      : `bg-[${color.value}]`
                    const textClass = color.name.includes('gray-0') || 
                                     color.name.includes('primary-10') || 
                                     color.name.includes('primary-20') ||
                                     color.name.includes('secondary-10') ||
                                     color.name.includes('secondary-20') ||
                                     color.name.includes('background-white')
                      ? 'text-gray-900' 
                      : 'text-white'
                    
                    return (
                      <div key={color.name} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div 
                          className={`h-32 ${bgClass} flex items-center justify-center`}
                          style={{ backgroundColor: color.value }}
                        >
                          <span className={`text-sm font-semibold ${textClass} px-2 py-1 rounded bg-black/20 backdrop-blur-sm`}>
                            {color.name}
                          </span>
                        </div>
                        <div className="p-4 bg-white">
                          <div className="font-mono text-sm font-semibold text-gray-900 mb-1">
                            {color.value}
                          </div>
                          <div className="text-xs text-gray-600 mb-2">
                            {color.name}
                          </div>
                          {color.description && (
                            <div className="text-xs text-gray-500 italic">
                              {color.description}
                            </div>
                          )}
                          <div className="mt-2 text-xs text-gray-400 font-mono">
                            className="bg-{color.name}"
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-obc-dark-blue mb-4">Usage Examples</h2>
            <div className="space-y-4 font-mono text-sm">
              <div>
                <code className="text-gray-600">className="bg-primary-100 text-white"</code>
              </div>
              <div>
                <code className="text-gray-600">className="bg-secondary-100 text-white"</code>
              </div>
              <div>
                <code className="text-gray-600">className="bg-alert-success text-white"</code>
              </div>
              <div>
                <code className="text-gray-600">className="text-gray-500 border border-gray-200"</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
