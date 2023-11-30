import type { ControllerConnectionDTO, DeviceControlDTO, DeviceWorkerDTO } from '@rotom/connections';

export { ControllerConnectionDTO, DeviceControlDTO, DeviceWorkerDTO };

export type WorkerDTO = {
  workerId: string;
  deviceId?: string;
  scanner?: ControllerConnectionDTO;
  isAllocated: boolean;
  mitm: DeviceWorkerDTO;
};

export interface StatusDTO {
  workers: WorkerDTO[];
  devices: DeviceControlDTO[];
}
