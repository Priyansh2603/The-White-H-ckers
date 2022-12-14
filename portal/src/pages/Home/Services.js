import React from 'react'
import SearchBar from './Search2'

export default function Services() {
  return (
    <div> <section id="services" className="services">
    <div className="container ml-10">

        <div className="section-title">
            <h2>Search Your Destiny</h2>
            <p><b color='black'>My advice to other disabled people would be, concentrate on things your disability doesn’t prevent you doing well, and don’t regret the things it interferes with. Don’t be disabled in spirit as well as physically.”</b>“</p>
        </div>
        <div id="map" className="absolute inset-0 bg-gray-300 mb-10">
            <iframe className="mb-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10316588.93044109!2d76.70377613363094!3d21.44451256188466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1661093592389!5m2!1sen!2sin" width="1280" height="650"  loading="fast"></iframe>
        </div>
        <div id='gotit'></div>
        <SearchBar />
        <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box iconbox-blue">
                    <div className="icon">
                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                        </svg>
                        <i className="bx bxs-institution"></i>
                    </div>
                    <h4><a href="https://disabilityaffairs.gov.in/content/">DEPD (Ministry Of Divyangjan)</a></h4>
                    <p>The Department of Empowerment of Persons with Disabilities in the Ministry of Social Justice & Empowerment facilitates empowerment of the persons with disabilities.</p>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-box iconbox-orange ">
                    <div className="icon">
                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                        </svg>
                        <i className="bx bx-run"></i>
                    </div>
                    <h4><a href="https://www.handicareindia.org/handicare-helpline/">Emergency Police Service</a></h4>
                    <p>The Indian Police Service is a central civil service under the All India Services.</p>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box iconbox-pink">
                    <div className="icon">
                          <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
                        </svg>
                        <i className="bx bx-plus-medical"></i>
                    </div>
                    <h4><a href="https://www.nhp.gov.in/national-health-helpline-toll-free-number-1800-180-1104-nhp-voice-web_pg">Hospital Helpine Number</a></h4>
                    <p>A hospital is a health care institution providing patient treatment with specialized health science and auxiliary healthcare staff and medical equipment.</p>
                </div>
            </div>

        </div>

    </div>
</section></div>
  )
}
