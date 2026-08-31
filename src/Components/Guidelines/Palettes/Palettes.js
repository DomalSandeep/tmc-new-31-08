import React, { useState } from 'react';
import './Palettes.scss';

// ===== ALL PALETTE DATA =====
const paletteData = {
    reserved: {
        label: 'Reserved Colours',
        usage: [
            'Best suited for institutions looking for a calm, understated visual presence.',
            'Uses colour selectively, allowing content, imagery, and information to take prominence.',
            'Creates a clean and reassuring experience with minimal visual intensity.'
        ],
        subTabs: {
            jade: {
                label: 'Jade',
                colors: ['rgba(127, 170, 179, 1)', 'rgba(236, 242, 244, 1)'],
                core: [
                    { hex: '#7FAAB3', usage: [{ title: 'Primary', items: ['Category cards', 'Support centre cards', 'Testimonial cards', 'Top band in nav'] }] },
                    { hex: '#537379', usage: [{ title: 'Secondary', items: ['Statistics', 'Text links'] }] },
                    { hex: '#000000', usage: [{ title: 'Text', items: ['Headings and body text'] }] },
                    { hex: '#EFF4F4', usage: [{ title: 'Section Backgrounds', items: ['Media Banner background', 'Text Banner background', 'Inner page header', 'Information Panel Background'] }] },
                    { hex: '#FFFFFF', usage: [{ title: '', items: ['Background for desktop', 'Hero section heading and subheading text', 'Headings and body text on overlay'] }] }
                ],
                secondary: [
                    { hex: '#7FAAB3 30% Opacity', usage: [{ items: ['Line separator 1'] }] },
                    { hex: '#537379', usage: [{ items: ['Section Divider'] }] },
                    { hex: '#537379', usage: [{ items: ['Footer text for subheadings'] }] },
                    { hex: '#FFFFFF 70% Opacity', usage: [{ items: ['Quick Links Background'] }] },
                    { hex: '#D6E3F0', usage: [{ items: ['Footer top band background'] }] },
                    { hex: '#EFF4F9', usage: [{ items: ['Footer main background'] }] }
                ],
                neutral: [
                    { hex: '#696969', usage: [{ title: 'Neutral Dark', items: ['Preview input labels'] }] },
                    { hex: '#8F8F8F', usage: [{ title: 'Neutral Medium', items: ['Input fields stroke, Hint text', 'Content Divider'] }] },
                    { hex: '#C7C7C7', usage: [{ title: 'Neutral Light', items: ['Disabled state', 'Success popup input label text'] }] },
                    { hex: '#E8E8E8', usage: [{ title: '', items: ['Related links panel background'] }] }
                ],
                buttons: [
                    { variant: 'Primary Button', fill: '#7FAAB3', border: '--', text: '#FFFFFF' },
                    { variant: 'Secondary Button', fill: '--', border: '#3D5C7B', text: '#3D5C7B' },
                    { variant: 'Ghost Button', fill: '#EFF4F4 · 40% opacity', border: '#EFF4F4', text: '#EFF4F4' }
                ],
                pills: [
                    { variant: 'Selection Pills', state: 'Selected', fill: '#7FAAB3', border: '--', text: '#FFFFFF' },
                    { variant: '', state: 'Unselected', fill: '#FFFFFF', border: '#537379', text: '#000000' },
                    { variant: 'Suggestion Pills', state: 'Default', fill: '#FFFFFF', border: '#537379', text: '#000000' },
                    { variant: 'Info Pills', state: 'Default', fill: '#FFFFFF', border: '#7FAAB3', text: '#000000' },
                    { variant: 'Expandable Filter Pills', state: 'Default', fill: '#FFFFFF', border: '#7FAAB3', text: '#000000' }
                ]
            },
            sky: {
                label: 'Sky',
                colors: ['rgba(125, 163, 209, 1)', 'rgba(239, 244, 249, 1)'],
                core: [
                    { hex: '#7DA3D1', usage: [{ title: 'Primary', items: ['Category cards', 'Support centre cards', 'Testimonial cards', 'Top band in nav'] }] },
                    { hex: '#3D5C7B', usage: [{ title: 'Secondary', items: ['Statistics', 'Text links'] }] },
                    { hex: '#000000', usage: [{ title: 'Text', items: ['Headings and body text'] }] },
                    { hex: '#EFFAF9', usage: [{ title: 'Section Backgrounds', items: ['Media Banner background', 'Text Banner background', 'Inner page header', 'Information Panel Background'] }] },
                    { hex: '#FFFFFF', usage: [{ title: '', items: ['Background for desktop', 'Hero section heading and subheading text', 'Headings and body text on overlay'] }] }
                ],
                secondary: [
                    { hex: '#7DA3D1 30% Opacity', usage: [{ items: ['Line separator 1'] }] },
                    { hex: '#7DA3D1', usage: [{ items: ['Section Divider'] }] },
                    { hex: '#7DA3D1', usage: [{ items: ['Footer text for subheadings'] }] },
                    { hex: '#FFFFFF 70% Opacity', usage: [{ items: ['Quick Links Background'] }] },
                    { hex: '#D6E3F0', usage: [{ items: ['Footer top band background'] }] },
                    { hex: '#EFFAF9', usage: [{ items: ['Footer main background'] }] }
                ],
                neutral: [
                    { hex: '#696969', usage: [{ title: 'Neutral Dark', items: ['Preview input labels'] }] },
                    { hex: '#8F8F8F', usage: [{ title: 'Neutral Medium', items: ['Input fields stroke, Hint text', 'Content Divider'] }] },
                    { hex: '#C7C7C7', usage: [{ title: 'Neutral Light', items: ['Disabled state', 'Success popup input label text'] }] },
                    { hex: '#E8E8E8', usage: [{ title: '', items: ['Related links panel background'] }] }
                ],
                buttons: [
                    { variant: 'Primary Button', fill: '#7DA3D1', border: '--', text: '#FFFFFF' },
                    { variant: 'Secondary Button', fill: '--', border: '#7DA3D1', text: '#000000' },
                    { variant: 'Ghost Button', fill: '#EFF4F9 40% opacity', border: '#EFF4F9', text: '#EFF4F9' }
                ],
                pills: [
                    { variant: 'Selection Pills', state: 'Selected', fill: '#7DA3D1', border: '--', text: '#FFFFFF' },
                    { variant: '', state: 'Unselected', fill: '#FFFFFF', border: '#3D6C7B', text: '#000000' },
                    { variant: 'Suggestion Pills', state: 'Default', fill: '#FFFFFF', border: '#3D6C7B', text: '#000000' },
                    { variant: 'Info Pills', state: 'Default', fill: '#FFFFFF', border: '#7DA3D1', text: '#000000' },
                    { variant: 'Expandable Filter Pills', state: 'Default', fill: '#FFFFFF', border: '#7DA3D1', text: '#000000' }
                ]
            },
            cotton: {
                label: 'Cotton',
                colors: ['rgba(218, 177, 116, 1)', 'rgba(245, 239, 230, 1)'],
                core: [
                    { hex: '#DAB174', usage: [{ title: 'Primary', items: ['Category cards', 'Support centre cards', 'Testimonial cards', 'Top band in nav'] }] },
                    { hex: '#3D1700', usage: [{ title: 'Text', items: ['Headings and body text', 'Text label colours within primary buttons, secondary buttons, and pills', 'Text links', 'Icons'] }] },
                    { hex: '#F5EFE6', usage: [{ title: 'Section Backgrounds', items: ['Media Banner background', 'Text Banner background', 'Inner page header', 'Information Panel Background'] }] },
                    { hex: '#FFFFFF', usage: [{ title: '', items: ['Background for desktop', 'Hero section heading and subheading text', 'Headings and body text on overlay'] }] }
                ],
                secondary: [
                    { hex: '#3D1700 30% Opacity', usage: [{ items: ['Line separator 1'] }] },
                    { hex: '#DAB174', usage: [{ items: ['Section Divider'] }] },
                    { hex: '#FFFFFF 70% Opacity', usage: [{ items: ['Quick Links Background'] }] },
                    { hex: '#F0DFC4', usage: [{ items: ['Footer top band background'] }] },
                    { hex: '#F5EFE6', usage: [{ items: ['Footer main background'] }] }
                ],
                neutral: [
                    { hex: '#696969', usage: [{ title: 'Neutral Dark', items: ['Preview input labels'] }] },
                    { hex: '#8F8F8F', usage: [{ title: 'Neutral Medium', items: ['Input fields stroke, Hint text', 'Content Divider'] }] },
                    { hex: '#C7C7C7', usage: [{ title: 'Neutral Light', items: ['Disabled state', 'Success popup input label text'] }] },
                    { hex: '#E8E8E8', usage: [{ title: '', items: ['Related links panel background'] }] }
                ],
                buttons: [
                    { variant: 'Primary Button', fill: '#DAB174', border: '--', text: '#3D1700' },
                    { variant: 'Secondary Button', fill: '--', border: '#3D1700', text: '#3D1700' },
                    { variant: 'Ghost Button', fill: '#F5EFE6 40% opacity', border: '#3D1700', text: '#3D1700' }
                ],
                pills: [
                    { variant: 'Selection Pills', state: 'Selected', fill: '#DAB174', border: '--', text: '#3D1700' },
                    { variant: '', state: 'Unselected', fill: '#FFFFFF', border: '#3D1700', text: '#3D1700' },
                    { variant: 'Suggestion Pills', state: 'Default', fill: '#FFFFFF', border: '#3D1700', text: '#3D1700' },
                    { variant: 'Info Pills', state: 'Default', fill: '#FFFFFF', border: '#DAB174', text: '#3D1700' },
                    { variant: 'Expandable Filter Pills', state: 'Default', fill: '#FFFFFF', border: '#DAB174', text: '#3D1700' }
                ]
            }
        }
    },
    balanced: {
        label: 'Balanced Colours',
        usage: [
            'Best suited for institutions looking for a clear and confident visual presence.',
            'Uses colour more prominently while maintaining a light and approachable overall experience.',
            'Creates stronger visual distinction without making the interface feel overly bold.'
        ],
        subTabs: {
            ocean: {
                label: 'Ocean',
                colors: ['#64AEC4', 'linear-gradient(90deg, #7FBABF 0%, #95C8BC 100%)'],
                core: [
                    { hex: '#64AEC4', usage: [{ title: 'Primary', items: ['Category cards', 'Support centre cards', 'Testimonial cards', 'Top band in nav', 'Media Banner background'] }] },
                    { hex: '#537379', usage: [{ title: 'Secondary', items: ['Text links'] }] },
                    { hex: '#7FBA8F → #95C8BC', usage: [{ title: 'Gradient', items: ['Metrics / Trust Indicator Banner background', 'Inner page header', 'Text Banner background'] }] },
                    { hex: '#000000', usage: [{ title: 'Text', items: ['Headings and body text'] }] },
                    { hex: '#FFFFFF', usage: [{ title: '', items: ['Background for desktop', 'Text colour on banners', 'Hero section heading and subheading text', 'Headings and body text on overlay', 'Text colour in footer', 'Icon colour in footer', 'Icon colour on banners'] }] }
                ],
                secondary: [
                    { hex: '#64AEC4 30% Opacity', usage: [{ items: ['Line separator 1'] }] },
                    { hex: '#64AEC4', usage: [{ items: ['Section Divider'] }] },
                    { hex: '#FFFFFF 70% Opacity', usage: [{ items: ['Quick Links Background'] }] },
                    { hex: '#3E9AB6', usage: [{ items: ['Footer top band background'] }] },
                    { hex: '#64AEC4', usage: [{ items: ['Footer main background'] }] }
                ],
                neutral: [
                    { hex: '#696969', usage: [{ title: 'Neutral Dark', items: ['Preview input labels'] }] },
                    { hex: '#8F8F8F', usage: [{ title: 'Neutral Medium', items: ['Input fields stroke, Hint text', 'Content Divider'] }] },
                    { hex: '#C7C7C7', usage: [{ title: 'Neutral Light', items: ['Disabled state', 'Success popup input label text'] }] },
                    { hex: '#64AEC4 30% Opacity', usage: [{ title: '', items: ['Information Panel Background'] }] },
                    { hex: '#E8E8E8', usage: [{ title: '', items: ['Related links panel background'] }] }
                ],
                buttons: [
                    { variant: 'Primary Button', fill: '#64AEC4', border: '--', text: '#FFFFFF' },
                    { variant: 'Secondary Button', fill: '--', border: '#64AEC4', text: '#000000' },
                    { variant: 'Secondary Button (on coloured banner)', fill: '--', border: '#FFFFFF', text: '#FFFFFF' },
                    { variant: 'Ghost Button', fill: '#FFFFFF 40% opacity', border: '#FFFFFF', text: '#FFFFFF' }
                ],
                pills: [
                    { variant: 'Selection Pills', state: 'Selected', fill: '#64AEC4', border: '--', text: '#FFFFFF' },
                    { variant: '', state: 'Unselected', fill: '#FFFFFF', border: '#244247', text: '#244247' },
                    { variant: 'Suggestion Pills', state: 'Default', fill: '#FFFFFF', border: '#244247', text: '#244247' },
                    { variant: 'Info Pills', state: 'Default', fill: '#FFFFFF', border: '#64AEC4', text: '#000000' },
                    { variant: 'Expandable Filter Pills', state: 'Default', fill: '#FFFFFF', border: '#64AEC4', text: '#000000' }
                ]
            },
            azure: {
                label: 'Azure',
                colors: ['#75A4EA', 'linear-gradient(90deg, #7BB1DE 0%, #3A8CD0 100%)'],
                core: [
                    { hex: '#75A4EA', usage: [{ title: 'Primary', items: ['Category cards', 'Support centre cards', 'Testimonial cards', 'Top band in nav', 'Media Banner background'] }] },
                    { hex: '#22457B', usage: [{ title: 'Secondary', items: ['Text links'] }] },
                    { hex: '#7BB1DE → #3ABCD0', usage: [{ title: 'Gradient', items: ['Metrics / Trust Indicator Banner background', 'Inner page header', 'Text Banner background'] }] },
                    { hex: '#000000', usage: [{ title: 'Text', items: ['Headings and body text'] }] },
                    { hex: '#FFFFFF', usage: [{ title: '', items: ['Background for desktop', 'Text colour on banners', 'Hero section heading and subheading text', 'Headings and body text on overlay', 'Text colour in footer', 'Icon colour in footer', 'Icon colour on banners'] }] }
                ],
                secondary: [
                    { hex: '#75A4EA 30% Opacity', usage: [{ items: ['Line separator 1'] }] },
                    { hex: '#75A4EA', usage: [{ items: ['Section Divider'] }] },
                    { hex: '#FFFFFF 70% Opacity', usage: [{ items: ['Quick Links Background'] }] },
                    { hex: '#4F89E0', usage: [{ items: ['Footer top band background'] }] },
                    { hex: '#75A4EA', usage: [{ items: ['Footer main background'] }] }
                ],
                neutral: [
                    { hex: '#696969', usage: [{ title: 'Neutral Dark', items: ['Preview input labels'] }] },
                    { hex: '#8F8F8F', usage: [{ title: 'Neutral Medium', items: ['Input fields stroke, Hint text', 'Content Divider'] }] },
                    { hex: '#C7C7C7', usage: [{ title: 'Neutral Light', items: ['Disabled state', 'Success popup input label text'] }] },
                    { hex: '#EFF4F9', usage: [{ title: '', items: ['Information Panel Background'] }] },
                    { hex: '#E8E8E8', usage: [{ title: '', items: ['Related links panel background'] }] }
                ],
                buttons: [
                    { variant: 'Primary Button', fill: '#75A4EA', border: '--', text: '#FFFFFF' },
                    { variant: 'Secondary Button', fill: '--', border: '#75A4EA', text: '#000000' },
                    { variant: 'Secondary Button (on coloured banner)', fill: '--', border: '#FFFFFF', text: '#FFFFFF' },
                    { variant: 'Ghost Button', fill: '#FFFFFF 40% opacity', border: '#FFFFFF', text: '#FFFFFF' }
                ],
                pills: [
                    { variant: 'Selection Pills', state: 'Selected', fill: '#75A4EA', border: '--', text: '#FFFFFF' },
                    { variant: '', state: 'Unselected', fill: '#FFFFFF', border: '#224578', text: '#224578' },
                    { variant: 'Suggestion Pills', state: 'Default', fill: '#FFFFFF', border: '#224578', text: '#224578' },
                    { variant: 'Info Pills', state: 'Default', fill: '#FFFFFF', border: '#75A4EA', text: '#000000' },
                    { variant: 'Expandable Filter Pills', state: 'Default', fill: '#FFFFFF', border: '#75A4EA', text: '#000000' }
                ]
            },
            apricot: {
                label: 'Apricot',
                colors: ['#BF8977', 'linear-gradient(90deg, #D89E99 0%, #C6A85E 170.57%)'],
                core: [
                    { hex: '#BF8977', usage: [{ title: 'Primary', items: ['Category cards', 'Support centre cards', 'Testimonial cards', 'Top band in nav', 'Media Banner background'] }] },
                    { hex: '#6E4335', usage: [{ title: 'Secondary', items: ['Text links'] }] },
                    { hex: '#D89E99 → #CDA477', usage: [{ title: 'Gradient', items: ['Metrics / Trust Indicator Banner background', 'Inner page header', 'Text Banner background'] }] },
                    { hex: '#000000', usage: [{ title: 'Text', items: ['Headings and body text'] }] },
                    { hex: '#FFFFFF', usage: [{ title: '', items: ['Background for desktop', 'Text colour on banners', 'Hero section heading and subheading text', 'Headings and body text on overlay', 'Text colour in footer', 'Icon colour in footer', 'Icon colour on banners'] }] }
                ],
                secondary: [
                    { hex: '#BF8977 30% Opacity', usage: [{ items: ['Line separator 1'] }] },
                    { hex: '#BF8977', usage: [{ items: ['Section Divider'] }] },
                    { hex: '#FFFFFF 70% Opacity', usage: [{ items: ['Quick Links Background'] }] },
                    { hex: '#AB644D', usage: [{ items: ['Footer top band background'] }] },
                    { hex: '#BF8977', usage: [{ items: ['Footer main background'] }] }
                ],
                neutral: [
                    { hex: '#696969', usage: [{ title: 'Neutral Dark', items: ['Preview input labels'] }] },
                    { hex: '#8F8F8F', usage: [{ title: 'Neutral Medium', items: ['Input fields stroke, Hint text', 'Content Divider'] }] },
                    { hex: '#C7C7C7', usage: [{ title: 'Neutral Light', items: ['Disabled state', 'Success popup input label text'] }] },
                    { hex: '#F4EFEC', usage: [{ title: '', items: ['Information Panel Background'] }] },
                    { hex: '#E8E8E8', usage: [{ title: '', items: ['Related links panel background'] }] }
                ],
                buttons: [
                    { variant: 'Primary Button', fill: '#BF8977', border: '--', text: '#FFFFFF' },
                    { variant: 'Secondary Button', fill: '--', border: '#BF8977', text: '#000000' },
                    { variant: 'Secondary Button (on coloured banner)', fill: '--', border: '#FFFFFF', text: '#FFFFFF' },
                    { variant: 'Ghost Button', fill: '#FFFFFF 40% opacity', border: '#FFFFFF', text: '#FFFFFF' }
                ],
                pills: [
                    { variant: 'Selection Pills', state: 'Selected', fill: '#75A4EA', border: '--', text: '#FFFFFF' },
                    { variant: '', state: 'Unselected', fill: '#FFFFFF', border: '#6E4335', text: '#6E4335' },
                    { variant: 'Suggestion Pills', state: 'Default', fill: '#FFFFFF', border: '#6E4335', text: '#6E4335' },
                    { variant: 'Info Pills', state: 'Default', fill: '#FFFFFF', border: '#BF8977', text: '#000000' },
                    { variant: 'Expandable Filter Pills', state: 'Default', fill: '#FFFFFF', border: '#BF8977', text: '#000000' }
                ]
            }
        }
    },
    vibrant: {
        label: 'Vibrant Colours',
        usage: [
            'Best suited for institutions looking for a clear and confident visual presence.',
            'Uses colour more prominently while maintaining a light and approachable overall experience.',
            'Creates stronger visual distinction without making the interface feel overly bold.'
        ],
        subTabs: {
            navy: {
                label: 'Navy',
                colors: ['#0065B2', 'linear-gradient(90deg, #0F2D52 0%, #C6A85E 214.94%)'],
                core: [
                    { hex: '#0065B2', usage: [{ title: 'Primary', items: ['Category cards', 'Support centre cards', 'Testimonial cards', 'Top band in nav', 'Media Banner background'] }] },
                    { hex: '#0F2D52 → #656758', usage: [{ title: 'Gradient', items: ['Metrics / Trust Indicator Banner background', 'Inner page header', 'Text Banner background'] }] },
                    { hex: '#191D76', usage: [{ title: 'Navigation links', items: [] }] },
                    { hex: '#000000', usage: [{ title: 'Text', items: ['Headings and body text'] }] },
                    { hex: '#FFFFFF', usage: [{ title: '', items: ['Background for desktop', 'Text colour on banners', 'Hero section heading and subheading text', 'Headings and body text on overlay', 'Text colour in footer', 'Icon colour in footer', 'Icon colour on banners'] }] }
                ],
                secondary: [
                    { hex: '#0065B2 30% Opacity', usage: [{ items: ['Line separator 1'] }] },
                    { hex: '#0065B2', usage: [{ items: ['Section Divider'] }] },
                    { hex: '#FFFFFF 70% Opacity', usage: [{ items: ['Quick Links Background'] }] },
                    { hex: '#0D4169', usage: [{ items: ['Footer top band background'] }] },
                    { hex: '#0065B2', usage: [{ items: ['Footer main background'] }] }
                ],
                neutral: [
                    { hex: '#696969', usage: [{ title: 'Neutral Dark', items: ['Preview input labels'] }] },
                    { hex: '#8F8F8F', usage: [{ title: 'Neutral Medium', items: ['Input fields stroke, Hint text', 'Content Divider'] }] },
                    { hex: '#C7C7C7', usage: [{ title: 'Neutral Light', items: ['Disabled state', 'Success popup input label text'] }] },
                    { hex: '#E6F0FF', usage: [{ title: '', items: ['Information Panel Background'] }] },
                    { hex: '#E8E8E8', usage: [{ title: '', items: ['Related links panel background'] }] }
                ],
                buttons: [
                    { variant: 'Primary Button', fill: '#64AEC4', border: '--', text: '#FFFFFF' },
                    { variant: 'Secondary Button', fill: '--', border: '#64AEC4', text: '#000000' },
                    { variant: 'Secondary Button (on coloured banner)', fill: '--', border: '#FFFFFF', text: '#FFFFFF' },
                    { variant: 'Ghost Button', fill: '#FFFFFF 40% opacity', border: '#FFFFFF', text: '#FFFFFF' }
                ],
                pills: [
                    { variant: 'Selection Pills', state: 'Selected', fill: '#0065B2', border: '--', text: '#FFFFFF' },
                    { variant: '', state: 'Unselected', fill: '#FFFFFF', border: '#0065B2', text: '#0065B2' },
                    { variant: 'Suggestion Pills', state: 'Default', fill: '#FFFFFF', border: '#0065B2', text: '#0065B2' },
                    { variant: 'Info Pills', state: 'Default', fill: '#FFFFFF', border: '#0065B2', text: '#000000' },
                    { variant: 'Expandable Filter Pills', state: 'Default', fill: '#FFFFFF', border: '#0065B2', text: '#000000' }
                ]
            },
            indigo: {
                label: 'Indigo',
                colors: ['#1A3A8A', ' linear-gradient(90deg, #152B61 0%, #5385F1 214.94%)'],
                core: [
                    { hex: '#1A3ABA', usage: [{ title: 'Primary', items: ['Category cards', 'Support centre cards', 'Testimonial cards', 'Top band in nav', 'Media Banner background'] }] },
                    { hex: '#152B61 → #3255A4', usage: [{ title: 'Gradient', items: ['Metrics / Trust Indicator Banner background', 'Inner page header', 'Text Banner background'] }] },
                    { hex: '#10E5E', usage: [{ title: '', items: ['Navigation links'] }] },
                    { hex: '#000000', usage: [{ title: 'Text', items: ['Headings and body text'] }] },
                    { hex: '#FFFFFF', usage: [{ title: '', items: ['Background for desktop', 'Text colour on banners', 'Hero section heading and subheading text', 'Headings and body text on overlay', 'Text colour in footer', 'Icon colour in footer', 'Icon colour on banners'] }] }
                ],
                secondary: [
                    { hex: '#1A3A8A 30% Opacity', usage: [{ items: ['Line separator 1'] }] },
                    { hex: '#1A3A8A', usage: [{ items: ['Section Divider'] }] },
                    { hex: '#FFFFFF 70% Opacity', usage: [{ items: ['Quick Links Background'] }] },
                    { hex: '#00247E', usage: [{ items: ['Footer top band background'] }] },
                    { hex: '#1A3A8A', usage: [{ items: ['Footer main background'] }] }
                ],
                neutral: [
                    { hex: '#696969', usage: [{ title: 'Neutral Dark', items: ['Preview input labels'] }] },
                    { hex: '#8F8F8F', usage: [{ title: 'Neutral Medium', items: ['Input fields stroke, Hint text', 'Content Divider'] }] },
                    { hex: '#C7C7C7', usage: [{ title: 'Neutral Light', items: ['Disabled state', 'Success popup input label text'] }] },
                    { hex: '#EBEDF7', usage: [{ title: '', items: ['Information Panel Background'] }] },
                    { hex: '#EBEBEB', usage: [{ title: '', items: ['Related links panel background'] }] }
                ],
                buttons: [
                    { variant: 'Primary Button', fill: '#1A3A8A', border: '--', text: '#FFFFFF' },
                    { variant: 'Secondary Button', fill: '--', border: '#1A3A8A', text: '#000000' },
                    { variant: 'Secondary Button (on coloured banner)', fill: '--', border: '#FFFFFF', text: '#FFFFFF' },
                    { variant: 'Ghost Button', fill: '#FFFFFF 40% opacity', border: '#FFFFFF', text: '#FFFFFF' }
                ],
                pills: [
                    { variant: 'Selection Pills', state: 'Selected', fill: '#1A3A8A', border: '--', text: '#FFFFFF' },
                    { variant: '', state: 'Unselected', fill: '#FFFFFF', border: '#1A3A8A', text: '#1A3A8A' },
                    { variant: 'Suggestion Pills', state: 'Default', fill: '#FFFFFF', border: '#1A3A8A', text: '#1A3A8A' },
                    { variant: 'Info Pills', state: 'Default', fill: '#FFFFFF', border: '#1A3A8A', text: '#000000' },
                    { variant: 'Expandable Filter Pills', state: 'Default', fill: '#FFFFFF', border: '#1A3A8A', text: '#000000' }
                ]
            },
            rose: {
                label: 'Rose',
                colors: ['#D6776F', 'linear-gradient(89.99deg, #B06392 -16.45%, #D9816B 127.15%)'],
                core: [
                    { hex: '#D6776F', usage: [{ title: 'Primary', items: ['Category cards', 'Support centre cards', 'Testimonial cards', 'Top band in nav', 'Media Banner background'] }] },
                    { hex: '#B5678D → #D17873', usage: [{ title: 'Gradient', items: ['Metrics / Trust Indicator Banner background', 'Inner page header', 'Text Banner background'] }] },
                    { hex: '#61002F', usage: [{ title: '', items: ['Navigation links'] }] },
                    { hex: '#000000', usage: [{ title: 'Text', items: ['Headings and body text'] }] },
                    { hex: '#FFFFFF', usage: [{ title: '', items: ['Background for desktop', 'Text colour on banners', 'Hero section heading and subheading text', 'Headings and body text on overlay', 'Text colour in footer', 'Icon colour in footer', 'Icon colour on banners'] }] }
                ],
                secondary: [
                    { hex: '#61002F 30% Opacity', usage: [{ items: ['Line separator 1'] }] },
                    { hex: '#D6776F', usage: [{ items: ['Section Divider'] }] },
                    { hex: '#FFFFFF 70% Opacity', usage: [{ items: ['Quick Links Background'] }] },
                    { hex: '#BC6A63', usage: [{ items: ['Footer top band background'] }] },
                    { hex: '#D6776F', usage: [{ items: ['Footer main background'] }] }
                ],
                neutral: [
                    { hex: '#696969', usage: [{ title: 'Neutral Dark', items: ['Preview input labels'] }] },
                    { hex: '#8F8F8F', usage: [{ title: 'Neutral Medium', items: ['Input fields stroke, Hint text', 'Content Divider'] }] },
                    { hex: '#C7C7C7', usage: [{ title: 'Neutral Light', items: ['Disabled state', 'Success popup input label text'] }] },
                    { hex: '#FCF0EE', usage: [{ title: '', items: ['Information Panel Background'] }] },
                    { hex: '#E8E8E8', usage: [{ title: '', items: ['Related links panel background'] }] }
                ],
                buttons: [
                    { variant: 'Primary Button', fill: '#D6776F', border: '--', text: '#FFFFFF' },
                    { variant: 'Secondary Button (on coloured banner)', fill: '--', border: '#D6776F', text: '#000000' },
                    { variant: 'Secondary Button', fill: '--', border: '#FFFFFF', text: '#FFFFFF' },
                    { variant: 'Ghost Button', fill: '#FFFFFF 40% opacity', border: '#FFFFFF', text: '#FFFFFF' }
                ],
                pills: [
                    { variant: 'Selection Pills', state: 'Selected', fill: '#D6776F', border: '--', text: '#FFFFFF' },
                    { variant: 'Selection Pills', state: 'Unselected', fill: '#FFFFFF', border: '#D6776F', text: '#D6776F' },
                    { variant: 'Suggestion Pills', state: 'Default', fill: '#FFFFFF', border: '#D6776F', text: '#D6776F' },
                    { variant: 'Info Pills', state: 'Default', fill: '#FFFFFF', border: '#D6776F', text: '#000000' },
                    { variant: 'Expandable Filter Pills', state: 'Default', fill: '#FFFFFF', border: '#D6776F', text: '#000000' }
                ]
            }
        }
    }
};

const Palettes = () => {
    const [mainTab, setMainTab] = useState('reserved');
    const [subTab, setSubTab] = useState('jade');

    const currentMainData = paletteData[mainTab];
    const currentSubData = currentMainData.subTabs[subTab];
    const currentUsage = currentMainData.usage;

    const handleMainTabChange = (tabKey) => {
        setMainTab(tabKey);
        const firstSubTab = Object.keys(paletteData[tabKey].subTabs)[0];
        setSubTab(firstSubTab);
    };

    // Helper: parse a hex/gradient/opacity string into a style object.
    // Regex-based so it tolerates stray/double spaces in the source data
    // (e.g. "#FFFFFF  70% Opacity"), unlike a plain split(' ').
    // Uses a CSS custom property (--swatch-color) instead of backgroundColor
    // so the literal hex string stays intact in the DOM style attribute —
    // browsers normally re-serialize backgroundColor into rgb(...), which is
    // what was breaking the white-swatch border detection in the SCSS.
    const getSwatchStyle = (rawHex) => {
        const value = rawHex.trim();

        const gradientMatch = value.match(/^(.+?)\s*→\s*(.+)$/);
        if (gradientMatch) {
            const [, c1, c2] = gradientMatch;
            return {
                background: `linear-gradient(90deg, ${c1.trim()} 0%, ${c2.trim()} 100%)`
            };
        }

        const opacityMatch = value.match(/^(#[0-9A-Fa-f]{3,8})\s+(\d+)%\s*Opacity$/i);
        if (opacityMatch) {
            const [, colorHex, opacityPct] = opacityMatch;
            return {
                '--swatch-color': colorHex,
                opacity: parseInt(opacityPct, 10) / 100
            };
        }

        return { '--swatch-color': value };
    };

    // Helper: Render color rows
    const renderColorRows = (data) => {
        if (!data || data.length === 0) return <div className="row">No data available</div>;
        return data.map((item, index) => (
            <div className="row" key={index}>
                <div className="cell">
                    <div className="swatch" style={getSwatchStyle(item.hex)}></div>
                </div>
                <div className="cell">{item.hex}</div>
                <div className="cell">
                    {item.usage.map((u, i) => (
                        <div key={i}>
                            {u.title && <div className="usage-title">{u.title}</div>}
                            <ul className="usage-list">
                                {u.items && u.items.map((li, j) => <li key={j}>{li}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        ));
    };

    // Helper: Render button/pill rows
    const renderButtonRows = (data, columns) => {
        if (!data || data.length === 0) return <div className="row">No data available</div>;
        return data.map((item, index) => (
            <div className="row" key={index}>
                {columns.map((col, i) => (
                    <div className="cell" key={i}>{item[col]}</div>
                ))}
            </div>
        ));
    };

    return (
        <div className='PalettesContent'>
            <div className="headTitleBg">
                <div className="container">
                    <h1><span>1.</span> Palettes</h1>
                </div>
            </div>
            <div className='page-content padtp0'>
                <div className="container">
                    <p>Color palettes define the visual tone and personality of the product. They consist of a set of primary, secondary, and neutral colours used consistently across the interface to create a cohesive and accessible user experience.</p>

                    {/* Main Tabs */}
                    <section>
                        <div className="tabs-container">
                            <div className="tabs-header">
                                {Object.keys(paletteData).map((key) => (
                                    <button
                                        key={key}
                                        className={`tab-btn ${mainTab === key ? 'active' : ''}`}
                                        onClick={() => handleMainTabChange(key)}
                                    >
                                        {paletteData[key].label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Usage Section */}
                    <section>
                        <div className="titlebdr mrgbtm">USAGE</div>
                        <ul className="bullets nospace">
                            {currentUsage.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Secondary Tabs */}
                    <section>
                        <div className="tabs-container dual-colours">
                            <div className="tabs-header">
                                {Object.keys(currentMainData.subTabs).map((key) => (
                                    <button
                                        key={key}
                                        className={`tab-btn ${subTab === key ? 'active' : ''}`}
                                        onClick={() => setSubTab(key)}
                                    >
                                        {currentMainData.subTabs[key].label}
                                        <div className="color-box">
                                            <div className="color1" style={{ background: currentMainData.subTabs[key].colors[0] }}></div>
                                            <div className="color2" style={{ background: currentMainData.subTabs[key].colors[1] }}></div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Tables Section */}
                    <section>
                        {/* CORE COLOURS */}
                        <div className="color-table-wrapper">
                            <div className="titlebdr">CORE COLOURS</div>
                            <div className="color-table">
                                <div className="row header">
                                    <div className="cell">Swatch</div>
                                    <div className="cell">Hex</div>
                                    <div className="cell">Usage / Description</div>
                                </div>
                                {renderColorRows(currentSubData.core)}
                            </div>
                        </div>

                        {/* SECONDARY COLOURS */}
                        <div className="color-table-wrapper">
                            <div className="titlebdr">SECONDARY COLOURS</div>
                            <div className="color-table">
                                <div className="row header">
                                    <div className="cell">Swatch</div>
                                    <div className="cell">Hex</div>
                                    <div className="cell">Usage / Description</div>
                                </div>
                                {renderColorRows(currentSubData.secondary)}
                            </div>
                        </div>

                        {/* NEUTRAL COLOURS */}
                        <div className="color-table-wrapper">
                            <div className="titlebdr">NEUTRAL COLOURS</div>
                            <div className="color-table">
                                <div className="row header">
                                    <div className="cell">Swatch</div>
                                    <div className="cell">Hex</div>
                                    <div className="cell">Usage / Description</div>
                                </div>
                                {renderColorRows(currentSubData.neutral)}
                            </div>
                        </div>

                        {/* BUTTONS & PILLS */}
                        <div className="color-table-wrapper pills-buttons">
                            <div className="titlebdr">BUTTONS & PILLS</div>
                            <div className="color-table buttons-pills">
                                <div className="row header">
                                    <div className="cell">Button Variants</div>
                                    <div className="cell">Fill</div>
                                    <div className="cell">Border</div>
                                    <div className="cell">Text label / Icon</div>
                                </div>
                                {renderButtonRows(currentSubData.buttons, ['variant', 'fill', 'border', 'text'])}
                            </div>
                            <div className="color-table buttons-pills">
                                <div className="row header">
                                    <div className="cell">Pill Variants</div>
                                    <div className="cell">State</div>
                                    <div className="cell">Fill</div>
                                    <div className="cell">Border</div>
                                    <div className="cell">Text label / Icon</div>
                                </div>
                                {renderButtonRows(currentSubData.pills, ['variant', 'state', 'fill', 'border', 'text'])}
                            </div>
                        </div>

                        {/* SHADOWS */}
                        <div className="color-table-wrapper">
                            <div className="titlebdr">SHADOWS</div>
                            <div className="color-table">
                                <div className="row header">
                                    <div className="cell">Swatch</div>
                                    <div className="cell">Hex</div>
                                    <div className="cell">Usage / Description</div>
                                </div>

                                {/* Shadow 1 - 70% */}
                                <div className="row">
                                    <div className="cell">
                                        <div className="swatch shadow-swatch" style={{
                                            backgroundColor: '#FFFFFF',
                                            boxShadow: ' 10px 16px 44px 0px rgba(106, 106, 106, 0.7)'
                                        }}></div>
                                    </div>
                                    <div className="cell">#6A6A6A - 70%</div>
                                    <div className="cell">
                                        <li>X - 10 | Y - 16 Blur - 44</li>
                                    </div>
                                </div>

                                {/* Shadow 2 - 33% */}
                                <div className="row">
                                    <div className="cell">
                                        <div className="swatch shadow-swatch" style={{
                                            backgroundColor: '#FFFFFF',
                                            boxShadow: '4px 6px 28px 0px rgba(106, 106, 106, 0.33)'
                                        }}></div>
                                    </div>
                                    <div className="cell">#6A6A6A - 33%</div>
                                    <div className="cell">
                                        <li>X - 4 | Y - 6 Blur - 28</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Guidelines */}
                    <div className='do-donts'>
                        <div className='titlebdr'>GUIDELINES</div>
                        <div className='titlebg'>Do's</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Use colours according to their defined roles and component mappings. </li>
                                    <li>Maintain the specified opacity when an opacity value is provided.</li>
                                    <li> Use the defined text/icon colour for each background to maintain contrast.</li>
                                    <li> Apply the same colour mapping consistently across repeated components.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='titlebg red'>Don'ts</div>
                        <div className="twocolumntext">
                            <div>
                                <ul className='bullets'>
                                    <li>Don't substitute colours between roles, even if they appear visually similar. </li>
                                    <li> Don't introduce new shades, tints or opacity values outside the defined palette.</li>
                                    <li> Don't change foreground/background combinations defined for buttons, pills and surfaces.</li>
                                    <li> Don't use a brand colour for text or interactive elements unless specified.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Palettes;