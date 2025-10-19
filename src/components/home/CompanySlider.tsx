
const companies = [
  { name: "JNU", logo: "/jnu.png" },
  { name: "NSUT", logo: "/nsut.png" },
  { name: "MCD", logo: "/mcdlogo.png" },
  { name: "DDU", logo: "/ddu2.jpeg" },
];

export default function CompanySlider() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
            In <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Collaboration</span> with
          </h2>
          <p className="text-muted-foreground">See our partners</p>
        </div>

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className="flex items-center justify-center p-4 bg-white/80 dark:bg-white/90 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-200"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-12 max-w-24 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
