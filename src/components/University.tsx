import * as React from 'react';

interface IUniversityProps {
    href: string;
    imgSrc: string;
    title: string;
    imgSize: number;
    imgClassName: string;
    uniText: string;                            
}

interface IUniversityState {
    href: string;
    imgSrc: string;
    title: string;
    imgSize: number;
    imgClassName: string;
    uniText: string;                            
}

class University extends React.Component<IUniversityProps, IUniversityState> {
    
    constructor (props: IUniversityProps){
        super(props);
        this.state = {
            href: this.props.href,
            imgSrc: this.props.imgSrc,
            title: this.props.title,
            imgSize: this.props.imgSize,
            uniText: this.props.uniText,
            imgClassName: this.props.imgClassName
        };
    }

    public render() {
        return (

            <p>
                <a href={this.state.href} target="_blank" rel="noopener noreferrer">
                    <img loading="lazy" className={this.state.imgClassName} title={this.state.title} src={this.state.imgSrc} alt={this.state.title} width={this.state.imgSize} height={this.state.imgSize} />
                </a>
                {this.state.uniText} 
            </p>

        );
    }
}
export default University;