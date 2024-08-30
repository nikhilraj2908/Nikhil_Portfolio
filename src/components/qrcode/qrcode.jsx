import QRCode from 'react-qr-code';
export function QrCodeComponent(){
    return(
        <div>
            <QRCode value="mailto:nikhilraj2908@gmail.com" style={{width:"18vh"}}></QRCode>
        </div>
    )
}