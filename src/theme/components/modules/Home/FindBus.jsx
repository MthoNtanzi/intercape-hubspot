import styles from '../../../styles/findBus.module.css';

export default function FindBus() {
    return (
        <div className={styles.findBusContainer}>
            <div className={styles.leftSide}></div>
            <div className={styles.rightSide}>
                <h2>Find a sales office</h2>
                <form className={styles.findBusForm}>
                    <h3>Find A</h3>
                    <h4>Bus Stop</h4>
                    <select name="province" id="province" className={styles.citySelect}>
                        <option value="">Select Province</option>
                        <option value="eastern-cape">Eastern Cape</option>
                        <option value="free-state">Free State</option>
                        <option value="gauteng">Gauteng</option>
                        <option value="kwazulu-natal">KwaZulu-Natal</option>
                        <option value="limpopo">Limpopo</option>
                        <option value="mpumalanga">Mpumalanga</option>
                        <option value="northern-cape">Northern Cape</option>
                        <option value="north-west">North West</option>
                        <option value="western-cape">Western Cape</option>
                        <option value="zimbabwe">Zimbabwe</option>
                        <option value="mozambique">Mozambique</option>
                        <option value="namibia">Namibia</option>
                        <option value="botswana">Botswana</option>
                        <option value="zambia">Zambia</option>
                        <option value="malawi">Malawi</option>
                    </select>
                    <select name="city" id="city" className={styles.citySelect}>
                        <option value="">Select Bus Stop</option>
                        {/* Eastern Cape */}
                        <option value="east-london">East London - Main Terminal</option>
                        <option value="port-elizabeth">Gqeberha (PE) - Market Square</option>
                        <option value="mthatha">Mthatha - Shell Ultra City</option>
                        <option value="queenstown">Queenstown - Main Terminal</option>
                        <option value="king-williams-town">King William's Town - Main Stop</option>

                        {/* Western Cape */}
                        <option value="cape-town">Cape Town - Main Terminal</option>
                        <option value="george">George - Main Terminal</option>
                        <option value="oudtshoorn">Oudtshoorn - Main Stop</option>
                        <option value="beaufort-west">Beaufort West - Shell</option>
                        <option value="worcester">Worcester - Main Terminal</option>

                        {/* Gauteng */}
                        <option value="johannesburg">Johannesburg - Park Station</option>
                        <option value="pretoria">Pretoria - Bosman Station</option>
                        <option value="vereeniging">Vereeniging - Main Terminal</option>
                        <option value="springs">Springs - Main Terminal</option>

                        {/* KwaZulu-Natal */}
                        <option value="durban">Durban - Station</option>
                        <option value="pietermaritzburg">Pietermaritzburg - Main Terminal</option>
                        <option value="newcastle">Newcastle - Main Terminal</option>
                        <option value="richards-bay">Richards Bay - Main Stop</option>

                        {/* Free State */}
                        <option value="bloemfontein">Bloemfontein - Central Station</option>
                        <option value="welkom">Welkom - Main Terminal</option>
                        <option value="bethlehem">Bethlehem - Main Stop</option>

                        {/* Mpumalanga */}
                        <option value="nelspruit">Mbombela (Nelspruit) - Terminal</option>
                        <option value="witbank">eMalahleni (Witbank) - Terminal</option>
                        <option value="ermelo">Ermelo - Main Stop</option>

                        {/* Limpopo */}
                        <option value="polokwane">Polokwane - Main Terminal</option>
                        <option value="tzaneen">Tzaneen - Main Stop</option>
                        <option value="musina">Musina - Border Post</option>

                        {/* Northern Cape */}
                        <option value="kimberley">Kimberley - Main Terminal</option>
                        <option value="upington">Upington - Main Stop</option>
                        <option value="springbok">Springbok - Shell</option>

                        {/* North West */}
                        <option value="rustenburg">Rustenburg - Main Terminal</option>
                        <option value="mahikeng">Mahikeng - Station</option>
                        <option value="potchefstroom">Potchefstroom - Main Stop</option>

                        {/* Zimbabwe */}
                        <option value="harare">Harare - Roadport</option>
                        <option value="bulawayo">Bulawayo - Main Terminal</option>
                        <option value="mutare">Mutare - Bus Terminal</option>

                        {/* Mozambique */}
                        <option value="maputo">Maputo - Terminal</option>
                        <option value="beira">Beira - Main Stop</option>

                        {/* Namibia */}
                        <option value="windhoek">Windhoek - Terminal</option>
                        <option value="walvis-bay">Walvis Bay - Main Stop</option>

                        {/* Botswana */}
                        <option value="gaborone">Gaborone - Station</option>
                        <option value="francistown">Francistown - Main Terminal</option>

                        {/* Zambia */}
                        <option value="lusaka">Lusaka - Terminal</option>
                        <option value="livingstone">Livingstone - Main Stop</option>

                        {/* Malawi */}
                        <option value="lilongwe">Lilongwe - Terminal</option>
                        <option value="blantyre">Blantyre - Main Stop</option>
                    
                    </select>
                    <button type="submit" className={styles.submitButton}>View Bus Stop Details</button>
                </form>
            </div>
        </div>
    );
}
