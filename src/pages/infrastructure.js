import Layout from "../layouts";
import React from "react";

import { TitleWithAnchor } from "../common/TitleWithAnchor";
import { FAQ } from "../common/projects/Faq";
import linuxLogo from '../assets/projects-logos/linux.svg';
import llvmLogo from '../assets/projects-logos/llvm.svg';
import ebpfForWindowsLogo from '../assets/projects-logos/ebpf-windows.svg';
import hbpfLogo from '../assets/projects-logos/hbpf.svg';
import gccLogo from '../assets/projects-logos/gcc.svg';
import rbpfLogo from '../assets/projects-logos/rbpf.svg';

import "../stylesheets/index.scss";
import { Hero } from "../common/projects/Hero";
import { ProjectCard } from "../common/projects/ProjectCard";
import Libraries from "../common/projects/Libraries";
import SEO from "../common/SEO";


const majorProjects = [
  {
    logoUrl: 'https://www.kernel.org/',
    name: 'Linux Kernel',
    logo: linuxLogo,
    title: 'eBPF Runtime',
    description: `The Linux kernel contains the eBPF runtime required to run eBPF
    programs. It implements the bpf(2) system call for interacting with
    programs, maps, BTF and various attachment points where eBPF
    programs can be executed from. The kernel contains a eBPF verifier
    in order to check programs for safety and a JIT compiler to
    translate programs to native machine code. User space tooling such
    as bpftool and libbpf are also maintained as part of the upstream
    kernel.`,
    urls: [
      {label: 'Git trees', url: 'https://git.kernel.org/?q=BPF+Group'},
      {label: 'Website', url: 'https://www.kernel.org/'},
      {label: 'Patches', url: 'https://patchwork.kernel.org/project/netdevbpf/list/?delegate=121173'},
      {label: 'Mailing list', url: 'https://lore.kernel.org/bpf/'},
      {label: 'Office hours', url: 'https://docs.google.com/spreadsheets/d/1LfrDXZ9-fdhvPEp_LHkxAMYyxxpwBXjywWa0AejEveU/edit#gid=0'},
      {label: 'CI', url: 'https://github.com/kernel-patches/bpf/pulls'},
      {label: 'Docs', url: 'https://www.kernel.org/doc/html/latest/bpf/'},
    ],
  },
  {
    logoUrl: 'https://llvm.org/',
    name: 'LLVM Compiler',
    logo: llvmLogo,
    title: 'eBPF Backend',
    description: `The LLVM compiler infrastructure contains the eBPF backend required
    to translate programs written in a C-like syntax to eBPF
    instructions. LLVM generates eBPF ELF files which contain program
    code, map descriptions, relocation information and BTF meta data.
    These ELF files contain all necessary information for eBPF loaders
    such as libbpf to prepare and load programs into the Linux kernel.
    The LLVM project also contains additional developer tools such as an
    eBPF object file disassembler.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/llvm/llvm-project/'},
      {label: 'Website', url: 'https://llvm.org/'},
      {label: 'Compiler Explorer', url: 'https://godbolt.org/z/7PqG8sWhM'},
      {label: 'Bugtracker', url: 'https://github.com/llvm/llvm-project/labels/backend:BPF'},    
      {label: 'Patches', url: 'https://reviews.llvm.org/search/query/ABG0ZPUPkDGb/#R'},
    ],
  },
  {
    logoUrl: 'https://gcc.gnu.org/',
    name: 'GCC Compiler',
    logo: gccLogo,
    title: 'eBPF Backend',
    description: `The GCC compiler comes with an eBPF backend starting from GCC 10. Up to that point, LLVM has been the only compiler which supports generating eBPF ELF files. The GCC port is roughly equivalent to the LLVM eBPF support. There are some missing bits of functionality but the GCC community is working to close these gaps over time. GCC also contains eBPF binutils as well as eBPF gdb support for debugging of eBPF code that is traditionally consumed by the Linux kernel. Included as part of this is an eBPF simulator for gdb.`,
    urls: [
      {label: 'Git repo', url: 'https://gcc.gnu.org/git.html'},
      {label: 'Website', url: 'https://gcc.gnu.org/'},
      {label: 'Compiler Explorer', url: 'https://godbolt.org/z/4MdMWc9e3'},
      {label: 'Bugtracker', url: 'https://gcc.gnu.org/bugzilla/'},
      {label: 'Mailing list', url: 'https://gcc.gnu.org/lists.html'},
      {label: 'Docs', url: 'https://gcc.gnu.org/onlinedocs/gcc/eBPF-Options.html'},
    ],
  },
]

const emergingProjects = [
  {
    logoUrl: 'https://github.com/microsoft/ebpf-for-windows',
    name: 'eBPF for Windows',
    logo: ebpfForWindowsLogo,
    title: 'eBPF Runtime',
    description: `The eBPF for Windows project is a work-in-progress that allows using
    existing eBPF toolchains and APIs familiar in the eBPF ecosystem to
    be used on top of Windows. That is, this project takes existing eBPF
    projects as submodules and adds the layer in between to make them
    run on top of Windows.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/microsoft/ebpf-for-windows'},
      {label: 'Website', url: 'https://microsoft.github.io/ebpf-for-windows/'},
      {label: 'Office hours', url: 'https://github.com/microsoft/ebpf-for-windows/discussions/427'},
      {label: 'Slack channel', url: 'https://cilium.slack.com/archives/C0210QTK2MV'},    
    ],
  },
  {
    name: 'uBPF',
    title: 'Userspace eBPF Runtime',
    description: `An eBPF runtime that permits execution of
    eBPF programs in user mode, with support for an interpreter as well as JIT
    compilation of eBPF programs on x86-64 and ARM64 architectures. This project
    supports running on Windows, macOS, and Linux platforms.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/iovisor/ubpf'},   
    ],
  },
  {
    logoUrl: 'https://github.com/qmonnet/rbpf/',
    name: 'rbpf',
    logo: rbpfLogo,
    title: 'User Space eBPF Runtime',
    description: `Running in user space, rbpf provides a cross-platform eBPF
    interpreter and a JIT-compiler for x86-64, implemented in Rust. It was
    initially a port of uBPF to Rust.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/qmonnet/rbpf/'},
      {label: 'Crate', url: 'https://crates.io/crates/rbpf'},
      {label: 'Docs', url: 'https://docs.rs/rbpf/latest/rbpf/'},
    ],
  },
  {
    logoUrl: 'https://github.com/rprinz08/hBPF',
    name: 'hBPF',
    logo: hbpfLogo,
    title: 'eBPF in Hardware',
    description: `An extended Berkley Packet Filter CPU implemented in hardware on
    FPGA. In contrast to classic HDL languages like Verilog or VHDL,
    Migen/LiteX (both based on Python) where used. Supports custom
    extensions to 'call' opcode and includes full test suite for each
    opcode for included emulator and simulator as well as for included
    hardware targets.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/rprinz08/hBPF'},   
      {label: 'Website', url: 'https://www.min.at/hbpf/'},
    ],
  },
  {
    name: 'PREVAIL',
    title: 'eBPF Verifier',
    description: `A polynomial-time eBPF verifier supporting bounded loops  based on abstract interpretation.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/vbpf/ebpf-verifier'},   
    ],
  },
]

const ProjectDescriptions = () => (
  <div className="project-descriptions">
    <TitleWithAnchor headerClassName="projects-title" className="projects-wrapper-title" >
      Major Infrastructure
    </TitleWithAnchor>
    <ul>
      {majorProjects.map((project, index) => (
        <ProjectCard key={index} {...project} logoSize="sm" />
      ))}
    </ul>

    <TitleWithAnchor headerClassName="projects-title" className="projects-wrapper-title" >
      Emerging Infrastructure
    </TitleWithAnchor>
    <ul>
      {emergingProjects.map((project, index) => (
        <ProjectCard key={index} {...project} logoSize="sm" />
      ))}
    </ul>

    <Libraries/>
  </div>
);

const Page = () => (
  <Layout>
    <div className="page-projects">
      <Hero title="Infrastructure" />
      <div className="project-content-wrapper">
        <ProjectDescriptions />
        <FAQ/>
      </div>
    </div>
  </Layout>
);

export default Page;

export const Head = ({location: { pathname }}) => {
  const pageMetadata = {
    title: 'eBPF Core Infrastructure Landscape',
     description: 'A directory of eBPF-based core infrastructure',
     slug: pathname,
     keywords: 'ebpf, bpf, landscape, directory, open source',
  }
  return <SEO {...pageMetadata} />
}
