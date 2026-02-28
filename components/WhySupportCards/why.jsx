import whySupport from "../../data/whySupport"

export function Cards(params) {
    return(
<div className="py-20 bg-gray-50">
  
  {/* Heading */}
  <div className="text-center">
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
      Why Businesses Choose SupportAI
    </h2>
    <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
      Powerful, simple and reliable AI support built for modern businesses.
    </p>
  </div>

  {/* Cards */}
  <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto px-6">
    {whySupport.map((card) => (
      <div
        key={card.id}
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      >
        <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
        <p className="text-gray-600 text-sm">{card.description}</p>
      </div>
    ))}
  </div>

</div>
    )
}