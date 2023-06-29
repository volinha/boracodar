'use client'

import React from 'react';
import './styles.css';

import { PlayCircle, Slideshow, MagnifyingGlass, PersonArmsSpread, Lock, ArrowClockwise, TextAa, CaretLeft, CaretRight, SidebarSimple, Export, Plus, Copy } from '@phosphor-icons/react'

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen max-h-1/3 flex-col items-center justify-center gap-2 bg-[url('https://images.unsplash.com/photo-1541194577687-8c63bf9e7ee3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')]">

      {/* navbar */}
      <div className="flex items-center justify-center gap-4 p-2 space-x-4 h-10 rounded-full 
      backdrop-blur-sm bg-white-20 shadow-inner shadow-white-10 drop-shadow-sm">
        <SidebarSimple size={24} color="#FFF" className='hover-button aspect-square w-8 p-1 transition-all' />
        <CaretLeft size={24} color="#FFF" className='hover-button aspect-square w-8 p-1 transition-all' />
        <CaretRight size={24} color="#FFF" className='hover-button aspect-square w-8 p-1 transition-all' />
        <div className='flex items-center justify-between gap-1 px-2 text-white text-sm font-light w-2/3 h-8  rounded-full backdrop-blur-sm bg-black/50'>
          <TextAa size={16} className='hover-button transition-all' />
          <div className='flex items-center justify-center gap-2'>
            <Lock size={16} weight="fill" color="#FFF" />
            rocketseat.com
          </div>
          <ArrowClockwise size={16} className='hover-button transition-all' />
        </div>
        <Export size={24} color="#FFF" className='hover-button aspect-square w-8 p-1 transition-all' />
        <Plus size={24} color="#FFF" className='hover-button aspect-square w-8 p-1 transition-all' />
        <Copy size={24} color="#FFF" className='hover-button aspect-square w-8 p-1 transition-all' />
      </div>

      <div className='flex flex-row items-center justify-center space-x-2 w-5/6 max-w-5/6'>
        {/* sidebar */}
        <div
          className='flex items-center justify-center flex-col rounded-full 
        bg-white-10 backdrop-blur-sm gap-4 w-10 p-4 mr-2
        shadow-inner shadow-white-10 drop-shadow-sm'>
          <PlayCircle size={20} color="#FFF" className='hover-button aspect-square transition-all' />
          <PersonArmsSpread size={20} color="#FFF" className='hover-button aspect-square  transition-all' />
          <Slideshow size={20} color="#FFF" className='hover-button aspect-square transition-all' />
          <MagnifyingGlass size={20} color="#FFF" className='hover-button aspect-square transition-all' />
        </div>

        {/* video */}
        <div className="flex items-center w-full max-w-3xl min-w-lg aspect-video self-center rounded-xl backdrop-blur-sm bg-black/10 overflow-hidden">
          <iframe className='flex-1 w-full aspect-video object-cover' src="https://www.youtube.com/embed/uL6nu0-zhu0?controls=0&showinfo=0&autoplay=1&loop=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>

        <div
          className='opacity-0 flex flex-col gap-4 w-10 p-4 mr-2'>
        </div>

      </div>

      {/* volume slider */}
      <div className="w-20 h-10 flex items-center justify-center gap-2">
        <div className="w-2 aspect-square bg-white-80 rounded-full"></div>
        <div className="w-20 h-2 bg-white-80 rounded-full"></div>
      </div>
    </main>
  )
}
