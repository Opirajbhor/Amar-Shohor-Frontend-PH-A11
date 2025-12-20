import React from "react";

const galleryImages = [
  "https://upload.wikimedia.org/wikipedia/commons/9/9b/Crowd_of_smiling_children_in_Bangladesh.jpg",
  "https://st2.depositphotos.com/1769810/11891/i/450/depositphotos_118915374-stock-photo-amroha-utter-pradesh-india-2011.jpg",
  "https://img.freepik.com/premium-photo/diverse-group-individuals-posing-together-photograph-social-gathering-group-poor-happy-smiling-indian-bangladesh-workers-ai-generated_538213-45156.jpg",
  "https://www.undp.org/sites/g/files/zskgke326/files/2025-04/undp_bd_group_mixed_rm.jpg",
  "https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2022/10/24/feature-cleanup-campaign-1-copy.jpeg",
  "https://i.redd.it/cleaning-work-of-mirpurs-paris-canal-by-bd-clean-volunteers-v0-avj46n9be6gc1.jpg?width=687&format=pjpg&auto=webp&s=83f9c6d71b5a9a4591028c962da69b02e7f11d7d",
  "https://images.hive.blog/p/HNWT6DgoBc196q36ADoGty1WEUBMYTezBR2yx2cmqPwhtM3UzUiz5qh45JxQmth3TWLGpe1qApJSKBEdK3jQbxdpi4erbfRTE9K2KPTvo85fdTjwEbx46GhUpjz?width=1600&height=1200&format=webp&mode=fit",
  "https://www.seattleglobalist.com/wp-content/uploads/2014/07/10543925_673931319364478_798889465_o.jpg",
];

const SuccessGallery = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Our Happy Community
          </h2>
          <p className="mt-3 text-gray-500">
            Smiles that reflect problems solved and trust earned.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[30px] shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={img}
                alt="Happy community member"
                className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessGallery;
