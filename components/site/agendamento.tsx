'use client'

import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Check, CircleDot, MapPin, MessageCircle, Phone, Shuffle, User } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/date-picker'
import { IconInput } from '@/components/ui/icon-input'
import { Label } from '@/components/ui/label'
import { NumberStepper } from '@/components/ui/number-stepper'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { TimePicker } from '@/components/ui/time-picker'
import { TituloSecao } from '@/components/site/titulo-secao'
import { EMPRESA, linkWhatsapp } from '@/shared/constants/empresa'
import { FROTA, MAX_PASSAGEIROS } from '@/shared/constants/frota'
import { SERVICOS } from '@/shared/constants/servicos'
import { cn } from '@/lib/utils'

// Data local (não UTC): à noite no Brasil o toISOString já estaria no dia seguinte e bloquearia "hoje"
function dataLocalHoje() {
    const d = new Date()
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

const schema = z.object({
    nome: z.string().trim().min(2, 'Informe seu nome'),
    servico: z.string().min(1, 'Escolha o tipo de serviço'),
    origem: z.string().trim().min(2, 'Informe o local de embarque'),
    destino: z.string().trim().min(2, 'Informe o destino'),
    data: z
        .string()
        .min(1, 'Informe uma data válida')
        .refine((v) => v >= dataLocalHoje(), 'Escolha uma data a partir de hoje'),
    horario: z
        .string()
        .regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'Horário inválido')
        .or(z.literal('')),
    passageiros: z.number().int().min(1).max(MAX_PASSAGEIROS),
    veiculo: z.string(),
    observacoes: z.string().trim().max(500, 'Máximo de 500 caracteres')
})

type FormDados = z.infer<typeof schema>

function formatarData(iso: string) {
    const [ano, mes, dia] = iso.split('-')
    return ano && mes && dia ? `${dia}/${mes}/${ano}` : iso
}

function montarMensagem(dados: FormDados) {
    const servico = SERVICOS.find((s) => s.valor === dados.servico)?.titulo ?? dados.servico
    const linhas = [
        `Olá! Meu nome é ${dados.nome} e gostaria de um orçamento.`,
        '',
        `*Serviço:* ${servico}`,
        `*Embarque:* ${dados.origem}`,
        `*Destino:* ${dados.destino}`,
        `*Data:* ${formatarData(dados.data)}${dados.horario ? ` às ${dados.horario}` : ''}`,
        `*Passageiros:* ${dados.passageiros}`
    ]
    const veiculo = FROTA.find((v) => v.valor === dados.veiculo)
    if (veiculo) linhas.push(`*Veículo de preferência:* ${veiculo.marca} ${veiculo.modelo}`)
    if (dados.observacoes) linhas.push(`*Observações:* ${dados.observacoes}`)
    return linhas.join('\n')
}

function Campo({
    id,
    rotulo,
    erro,
    obrigatorio,
    dica,
    className,
    children
}: {
    id: string
    rotulo: string
    erro?: string
    obrigatorio?: boolean
    dica?: string
    className?: string
    children: React.ReactNode
}) {
    return (
        <div className={cn('flex flex-col gap-2', className)}>
            <Label id={`${id}-rotulo`} htmlFor={id} required={obrigatorio}>
                {rotulo}
            </Label>
            {children}
            {erro ? (
                <p id={`${id}-erro`} role="alert" className="text-xs text-destructive">
                    {erro}
                </p>
            ) : (
                dica && <p className="text-xs text-muted-foreground">{dica}</p>
            )}
        </div>
    )
}

const GARANTIAS = [
    'Orçamento sem compromisso',
    `Pagamento facilitado: ${EMPRESA.pagamento}`,
    'Atendimento com agendamento antecipado'
]

const tileClasse =
    'relative flex cursor-pointer items-center gap-3 rounded-lg border border-input bg-background p-2.5 transition-colors hover:border-muted-foreground/40 sm:flex-col sm:items-stretch sm:gap-2.5 has-[:checked]:border-primary has-[:checked]:bg-accent has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring'

const tileMidiaClasse = 'relative h-12 w-20 shrink-0 overflow-hidden rounded-md bg-muted sm:aspect-[16/9] sm:h-auto sm:w-full'

function MarcaSelecionado() {
    return (
        <span className="absolute right-2 top-2 z-10 hidden size-5 place-items-center rounded-full bg-primary text-primary-foreground shadow [:checked~&]:grid">
            <Check className="size-3" />
        </span>
    )
}

export function Agendamento() {
    const hoje = dataLocalHoje()
    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormDados>({
        resolver: zodResolver(schema),
        defaultValues: {
            nome: '',
            servico: '',
            origem: '',
            destino: '',
            data: '',
            horario: '',
            passageiros: 1,
            veiculo: '',
            observacoes: ''
        }
    })

    function enviar(dados: FormDados) {
        window.open(linkWhatsapp(montarMensagem(dados)), '_blank', 'noopener,noreferrer')
    }

    const aria = (campo: keyof FormDados) =>
        errors[campo] ? { 'aria-invalid': true as const, 'aria-describedby': `${campo}-erro` } : {}

    return (
        <section id="agendar" className="py-20 sm:py-24">
            <div className="container grid items-start gap-12 lg:grid-cols-[1fr_1.45fr]">
                <div className="lg:sticky lg:top-24">
                    <TituloSecao
                        alinhamento="esquerda"
                        sobretitulo="Agendamento"
                        titulo="Solicite seu orçamento"
                        descricao="Preencha os dados da viagem e envie direto pelo WhatsApp. Você recebe o valor e a confirmação de disponibilidade."
                    />

                    <ul className="mt-8 space-y-3">
                        {GARANTIAS.map((g) => (
                            <li key={g} className="flex items-center gap-3 text-sm">
                                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                                    <Check className="size-3.5" />
                                </span>
                                {g}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 rounded-2xl border border-border bg-card p-5">
                        <p className="text-sm text-muted-foreground">Prefere falar direto?</p>
                        <p className="mt-1 text-xl font-semibold tabular-nums">{EMPRESA.telefoneExibicao}</p>
                        <div className="mt-4 grid grid-cols-2 gap-2">
                            <a
                                href={linkWhatsapp()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={buttonVariants({ variant: 'whatsapp' })}
                            >
                                <MessageCircle />
                                WhatsApp
                            </a>
                            <a href={`tel:+${EMPRESA.whatsapp}`} className={buttonVariants({ variant: 'outline' })}>
                                <Phone />
                                Ligar
                            </a>
                        </div>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit(enviar)}
                    noValidate
                    className="rounded-2xl border border-border bg-card shadow-xl shadow-black/5"
                >
                    <div className="flex items-center justify-between gap-4 border-b border-border px-6 py-4 sm:px-8">
                        <div>
                            <h3 className="text-base font-semibold">Dados da viagem</h3>
                            <p className="text-xs text-muted-foreground">Leva menos de 1 minuto</p>
                        </div>
                        <span className="grid size-10 place-items-center rounded-full bg-navy text-gold">
                            <MapPin className="size-5" />
                        </span>
                    </div>

                    <div className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
                        <Campo id="nome" rotulo="Seu nome" erro={errors.nome?.message} obrigatorio>
                            <IconInput
                                id="nome"
                                icon={User}
                                autoComplete="name"
                                placeholder="Como podemos te chamar?"
                                {...register('nome')}
                                {...aria('nome')}
                            />
                        </Campo>

                        <Campo id="servico" rotulo="Tipo de serviço" erro={errors.servico?.message} obrigatorio>
                            <Controller
                                control={control}
                                name="servico"
                                render={({ field }) => (
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger id="servico" ref={field.ref} onBlur={field.onBlur} {...aria('servico')}>
                                            <SelectValue placeholder="Selecione o serviço" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {SERVICOS.map(({ valor, titulo, icone: Icone }) => (
                                                <SelectItem key={valor} value={valor}>
                                                    <span className="flex items-center gap-2">
                                                        <Icone className="size-4 shrink-0 text-primary" />
                                                        {titulo}
                                                    </span>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </Campo>

                        <Campo id="origem" rotulo="Embarque" erro={errors.origem?.message} obrigatorio>
                            <IconInput
                                id="origem"
                                icon={CircleDot}
                                placeholder="Cidade, endereço ou hotel"
                                {...register('origem')}
                                {...aria('origem')}
                            />
                        </Campo>

                        <Campo id="destino" rotulo="Destino" erro={errors.destino?.message} obrigatorio>
                            <IconInput
                                id="destino"
                                icon={MapPin}
                                placeholder="Para onde vamos?"
                                {...register('destino')}
                                {...aria('destino')}
                            />
                        </Campo>

                        <div className="grid gap-5 sm:col-span-2 sm:grid-cols-[1.25fr_1fr_1fr]">
                            <Campo id="data" rotulo="Data" erro={errors.data?.message} obrigatorio>
                                <Controller
                                    control={control}
                                    name="data"
                                    render={({ field }) => (
                                        <DatePicker
                                            id="data"
                                            ref={field.ref}
                                            value={field.value}
                                            onChange={field.onChange}
                                            onBlur={field.onBlur}
                                            minDate={new Date(`${hoje}T00:00:00`)}
                                            {...aria('data')}
                                        />
                                    )}
                                />
                            </Campo>

                            <Campo id="horario" rotulo="Horário" erro={errors.horario?.message}>
                                <Controller
                                    control={control}
                                    name="horario"
                                    render={({ field }) => (
                                        <TimePicker
                                            id="horario"
                                            ref={field.ref}
                                            value={field.value}
                                            onChange={field.onChange}
                                            onBlur={field.onBlur}
                                            {...aria('horario')}
                                        />
                                    )}
                                />
                            </Campo>

                            <Campo
                                id="passageiros"
                                rotulo="Passageiros"
                                dica={`Até ${MAX_PASSAGEIROS} por carro`}
                                erro={errors.passageiros?.message}
                            >
                                <Controller
                                    control={control}
                                    name="passageiros"
                                    render={({ field }) => (
                                        <NumberStepper
                                            id="passageiros"
                                            aria-labelledby="passageiros-rotulo"
                                            value={field.value}
                                            onChange={field.onChange}
                                            min={1}
                                            max={MAX_PASSAGEIROS}
                                        />
                                    )}
                                />
                            </Campo>
                        </div>

                        <fieldset className="flex flex-col gap-2 sm:col-span-2">
                            <legend className="mb-2 text-sm font-medium leading-none">Veículo de preferência</legend>
                            <div className="grid gap-2 sm:grid-cols-3">
                                <label className={tileClasse}>
                                    <input type="radio" value="" className="sr-only" {...register('veiculo')} />
                                    <MarcaSelecionado />
                                    <span className={cn(tileMidiaClasse, 'grid place-items-center text-muted-foreground')}>
                                        <Shuffle className="size-5" />
                                    </span>
                                    <span className="min-w-0 sm:px-1 sm:pb-0.5">
                                        <span className="block text-sm font-medium">Sem preferência</span>
                                        <span className="block text-xs text-muted-foreground">O disponível</span>
                                    </span>
                                </label>
                                {FROTA.map((v) => (
                                    <label key={v.valor} className={tileClasse}>
                                        <input type="radio" value={v.valor} className="sr-only" {...register('veiculo')} />
                                        <MarcaSelecionado />
                                        <span className={tileMidiaClasse}>
                                            <Image src={v.imagem} alt="" fill sizes="(min-width: 640px) 200px, 80px" className="object-cover" />
                                        </span>
                                        <span className="min-w-0 sm:px-1 sm:pb-0.5">
                                            <span className="block truncate text-sm font-medium">
                                                {v.marca} {v.modelo}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                <span
                                                    className="size-2.5 rounded-full border border-border"
                                                    style={{ background: v.corHex }}
                                                    aria-hidden="true"
                                                />
                                                {v.cor} · {v.ano}
                                            </span>
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>

                        <Campo id="observacoes" rotulo="Observações" erro={errors.observacoes?.message} className="sm:col-span-2">
                            <Textarea
                                id="observacoes"
                                rows={3}
                                placeholder="Número do voo, bagagens, paradas, cadeirinha para criança..."
                                {...register('observacoes')}
                                {...aria('observacoes')}
                            />
                        </Campo>
                    </div>

                    <div className="border-t border-border px-6 py-5 sm:px-8">
                        <Button type="submit" variant="whatsapp" size="lg" className="w-full">
                            <MessageCircle />
                            Enviar pelo WhatsApp
                        </Button>
                        <p className="mt-3 text-center text-xs text-muted-foreground">
                            Seus dados vão só para a conversa no WhatsApp. Nada fica salvo no site.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}
